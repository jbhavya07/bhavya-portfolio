import React, {useState, useEffect} from 'react'


function Clock() {
    const[time, setTime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date());
        }, 1000);
        
        return ()=> clearInterval(timer);
    }, []);

    const formattedTime= time.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12: false});
  return (
    <div>
        {formattedTime}
    </div>
  )
}

export default Clock