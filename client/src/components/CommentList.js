import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ comments }) => {
  const renderedComments = Object.values(comments).map((post) => {
    const { content } = post;
    return (
      <div className="bg-yellow-50 shadow-md rounded px-4 pt-3 pb-4 mb-2">
        <div className="text-sm m-4 text-gray-600">{content}</div>
      </div>
    );
  });

  return <div className="w-full mt-4">{renderedComments}</div>;
};

PostList.propTypes = {
  comments: PropTypes.arrayOf({
    content: PropTypes.string,
  }).isRequired,
};

export default PostList;
