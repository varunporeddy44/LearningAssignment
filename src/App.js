import React from 'react';
import './App.css';
import Data from "./data.json"

function App(){
  const colors=["red","blue","orange","green","grey","yellow"]
  return(
    <div>
      {Data.map((post,i)=>{
        return(
          
        <div style={{fontSize:post.count,textAlign:"center",
          color:
          i>=colors.length 
          ?colors[i-colors.length]
          :colors[i]
        }}
        key={i}>{post.keyword}</div>
        )
      })}
    </div>
  );
}

export default App;
