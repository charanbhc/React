import React , { useState} from 'react'
export default function UseState(){
const [count,setCount] = useState(0);
return (
<div><h1> Hello This is FED</h1>
     <button onClick = { () => {setCount(count+1)}}> Hello </button>
<h1> count is - {count} </h1>
</div>
);
}