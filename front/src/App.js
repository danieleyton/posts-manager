import React from 'react';
import './App.css';
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import PostsFilter from "./features/posts/PostsFilter";

function App() {
  return (
    <main className="App">
	<PostsFilter />
        <PostsList />
	<AddPostForm />
    </main>
  );
}

export default App;
