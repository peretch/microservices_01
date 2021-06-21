const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  const { id: postId } = req.params;
  res.send(commentsByPostId[postId] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;
  const { id: postId } = req.params;

  const comments = commentsByPostId[postId] || [];
  comments.push({ id: commentId, content, status: 'pending' });
  commentsByPostId[postId] = comments;

  axios.post('http://event-bus-srv:4005/events', {
    type: 'CommentCreated',
    data: {
      id: commentId,
      content,
      status: 'pending',
      postId,
    },
  });
  res.status(201).send(commentsByPostId[postId]);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  console.log(`Received event ${type}`);

  if (type === 'CommentModerated') {
    const { id, content, status, postId } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((com) => com.id === id);
    comment.status = status;

    axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentUpdated',
      data: {
        id,
        content,
        status,
        postId,
      },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
