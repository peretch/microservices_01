const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log(`Received event ${type}`);

  if (type === 'CommentCreated') {
    const { content } = data;
    const status = content.includes('orange') ? 'rejected' : 'aproved';

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        ...data,
        status,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log('Moderation Service listening on 4003');
});
