import React, { useState, useEffect } from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const axios = require('axios');

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await axios.get('http://query-srv:4002/posts');
    const { data } = response;
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    const { id, title, comments } = post;
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-lg m-4">{title}</div>
        <CommentList comments={comments} />
        <CommentCreate postId={id} />
      </div>
    );
  });

  return (
    <div className="w-full mt-4">
      <h1 className="text-center text-xl">Posts list</h1>
      {renderedPosts}
    </div>
  );
};

PostList.propTypes = {};

export default PostList;
