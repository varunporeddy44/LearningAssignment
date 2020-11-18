import React from 'react';
import './App.css';
import WordCloud from  'react-d3-cloud';
import Data from "./data.json";

function App(){
  const array=[]
  Data.map(post=>{
    array.push(post)
     return(array)
  })
 
const fontSizeMapper = word => word.value;
 
return(
  <WordCloud
    data={array}
    fontSizeMapper={fontSizeMapper}
    rotate={0}
  />
);
}

export default App;