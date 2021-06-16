import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ comments }) => {
  const renderedComments = Object.values(comments).map((comment) => {
    let content;

    if (comment.status === 'pending') {
      content = (
        <span className="text-yellow-500">
          This comment is waiting for moderation
        </span>
      );
    }
    if (comment.status === 'rejected') {
      content = <span className="text-red-500">Comment rejected</span>;
    }
    if (comment.status === 'aproved') {
      content = comment.content;
    }
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
