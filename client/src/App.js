import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

const App = () => (
  <div className="container mx-auto">
    <div className="text-xl text-center m-4">
      <h1>Blog app</h1>
    </div>
    <div className="flex">
      <div className="w-1/5" />
      <div className="w-3/5">
        <PostCreate />
      </div>
    </div>
    <div className="flex">
      <div className="w-1/5" />
      <div className="w-3/5">
        <PostList />
      </div>
    </div>
  </div>
);

App.propTypes = {};

export default App;
