import React from 'react';
const APIcard = ({ post }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.id}. {post.title}</h2>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default APIcard;
