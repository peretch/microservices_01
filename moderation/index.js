const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const handleEvent = async (type, data) => {
  if (type === 'CommentCreated') {
    const { content } = data;
    const status = content.includes('orange') ? 'rejected' : 'aproved';

    await axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentModerated',
      data: {
        ...data,
        status,
      },
    });
  }
};

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log(`Received event ${type}`);

  handleEvent(type, data);

  res.send({});
});

app.listen(4003, async () => {
  console.log('Moderation Service listening on 4003');
  try {
    const res = await axios.get('http://event-bus-srv:4005/events');

    for (const event of res.data) {
      console.log('Processing event:', event.type);

      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});
