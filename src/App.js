import React from 'react';
import './App.css';
import Data from "./data.json"

function App(){
  const colors=["red","blue","orange","green","grey","yellow","indigo","black"]
  var n=0
  var a=0
  return(
    <div>
      {Data.map((post,i)=>{
        
        a=i%colors.length
        n=(i-a)/colors.length
        return(
        <div style={{fontSize:post.count,textAlign:"center",
          color:
          i>=colors.length 
          ?colors[i-(n*colors.length)]
          :colors[i]
        }}
        key={i}>{post.keyword}</div>
        )
      })}
    </div>
  );
}

export default App;
