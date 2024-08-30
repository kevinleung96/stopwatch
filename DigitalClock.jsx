import React,{useEffect,useRef, useState} from 'react'

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const intervalIdRef = useRef(null);

  useEffect(()=>{
    intervalIdRef.current = setInterval(()=>{setTime(new Date())}, 1000);
    return()=>{clearInterval(intervalIdRef.current);}
  },[])

  const padZero = (Number) =>{
    return Number < 10 ?  '0' + Number : Number;
  }

  const formatTime = () =>{
    let hrs = time.getHours();
    const mins = time.getMinutes();
    const secs= time.getSeconds();
    
    const ampm =  hrs < 12 ? 'am' : 'pm';
    hrs = hrs % 12 || 12;

    return `${padZero(hrs)}:${padZero(mins)}:${padZero(secs)} ${ampm}`

  }
  return (<>
            <div className="container">
            <h1 style={{color:'wheat'}}>Digital Clock</h1>
            <div className='display'>{formatTime()}</div>
            </div>
          </>


  )
}
