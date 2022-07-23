import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPost';
import CreatePost from './Components/CreatePost';
import NavBar from './Components/NavBar';
import "./Components/DisplayPost";
import "./Components/CreatePost";
import './Index.css';


function App() {
  const [posts, setPosts] = useState([
    { name: 'Jaymie', message: 'Welcome to my social feed!' },
  ]);
  function addNewPost(post) {
    let tempPost = [...posts, post];
    setPosts(tempPost);
  }


return (
  <div className='container-fluid'> 
  <NavBar className='navbar'/>
  <div className='borders'>
    <CreatePost addNewPost={addNewPost}/>
    <DisplayPosts displayPosts={posts}/>
  
    </div>
  </div>
  );
}

export default App;
