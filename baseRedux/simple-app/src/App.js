import React from 'react';
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
      <div className='container'>
          <PostForm />
          <Posts />
      </div>
  );
}

export default App;
