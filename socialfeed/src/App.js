import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPost';
import CreatePost from './Components/CreatePost';


function App() {
  const [posts, setPosts] = useState([
    { name: 'Jaymie', message: "Welcome to my social feed!" },
  ]);
  return(
    <div>
      <CreatePost createPost={posts}/>
      <DisplayPosts displayPosts={posts}/>
      
    </div>
  );
 
}
console.log(App) 

export default App;
