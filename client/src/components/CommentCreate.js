import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PostCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://comments-srv:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div className="w-full mt-4">
      <form
        onSubmit={onSubmit}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-blue-50"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            <h1 className="text-sm text-gray-600 mb-1">New Comment</h1>
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

PostCreate.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostCreate;
