const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  
  try{
    await axios.post('http://localhost:4000/events', {type, data});
    await axios.post('http://localhost:4001/events', {type, data});
    await axios.post('http://localhost:4002/events', {type, data});
  
    res.send({status: 'OK'});
  }catch(error){
    res.status(500).send({status: 'ERROR'});
  }
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
