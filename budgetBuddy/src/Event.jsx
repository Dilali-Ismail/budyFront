import React, { useEffect, useState } from 'react'

function Event() {

    const [count ,setCount] = useState(0);
    const HandlPlus = () =>{
           setCount(count + 1);
    }
    const HandlMoin = () =>{
        setCount(count - 1);

    }
  
    useEffect(()=>{
      return () =>{
                 console.log('ff');
        }
  
      })

  return (
    <div>
         <span>{count}</span>
         <br/>
        <button onClick={HandlPlus}>+</button>
        <button onClick={HandlMoin}>-</button>
        <input type='text' placeholder='text' ></input>
    </div>
  )
}

export default Event