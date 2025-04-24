import React, { useEffect, useState } from 'react'

function Master() {

    const [count,setCount] = useState(0);

     const HandlClickPlus = () =>{

          return setCount(count +1);
     }

     const HandlClickMoin = () =>{

        return setCount(count -1);
   }

//    useEffect(()=>{

//     console.log('Montage');

//    },[]);

   useEffect(()=>{
    
    console.log('update');
    
    return ()=>{
        console.log('Démontage');
    }
   
   },[]);


  return (
    <div>
        <button onClick={HandlClickMoin}>-</button>
        <span>{count}</span>
        <button onClick={HandlClickPlus}>+</button>
        
        </div>
  )
}

export default Master