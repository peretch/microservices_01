const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const events = [];

app.get('/events', async (req, res) => {
  res.send(events);
});

app.post('/events', async (req, res) => {
  const event = req.body;
  const { type, data } = event;
  console.log(`Received event ${type}`);
  events.push(event);

  axios
    .post('http://localhost:4000/events', { type, data })
    .catch((error) => console.log('error'));
  axios
    .post('http://localhost:4001/events', { type, data })
    .catch((error) => console.log('error'));
  axios
    .post('http://localhost:4002/events', { type, data })
    .catch((error) => console.log('error'));
  axios
    .post('http://localhost:4003/events', { type, data })
    .catch((error) => console.log('error'));

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
