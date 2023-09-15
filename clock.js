import React, { useState } from 'react';

function Clock(){
    let time =new Date().toLocaleTimeString();
    const[currenttime,setcurrentTime] = useState(time);
    const updateTime=()=>{
        let time=new Date().toLocaleTimeString();
        setcurrentTime(time);
    }
    setInterval(updateTime,1000);
    return(<div><h1>{currenttime}</h1></div>);
}
export default Clock