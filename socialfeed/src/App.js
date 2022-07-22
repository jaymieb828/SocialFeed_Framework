import React, { useState } from 'react';

import CreatePost from './Components/CreatePost';


function App() {
  const [posts, setPosts] = useState([
    { message: "Type your message here" },
  ]);
  return(
    <div>
      <CreatePost createPost={posts}/>
      
    </div>
  );
 
}
console.log(App) 

export default App;
