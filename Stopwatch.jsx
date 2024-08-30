import React,{useEffect,useState,useRef} from 'react'

export const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTime = useRef(0);
    const intervalIdRef = useRef(null);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(() => {setElapsedTime(new Date()-startTime.current)}, 10);
        return()=>clearInterval(intervalIdRef.current)}
    },[isRunning]
    )
    const start = () =>{
        setIsRunning(true);
        startTime.current = new Date() - elapsedTime;
    }

    const stop = () =>{
        setIsRunning(false);
    }

    const reset = () =>{
        setIsRunning(false);
        startTime.current = 0;
        setElapsedTime(0);
    }

    const padZero = (number) =>{
        return number > 9 ? number : '0' + number;
    }

    const formatTime = () =>{
        let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60)
        let secs = Math.floor(elapsedTime / 1000 % 60);
        let mscs = Math.floor(elapsedTime % 1000 / 10);
        return `${padZero(hrs)} : ${padZero(mins)} : ${padZero(secs)} : ${padZero(mscs)}`;
    }

  return (          
            <div className="container">
                <h1 style={{color:'wheat'}}>Stop Watch</h1>
                <div className='display'>{formatTime()}</div>
                <div className="controls">
                    <button onClick={start} className='start-btn'>Start</button>
                    <button onClick={stop} className='stop-btn'>Stop</button>
                    <button onClick={reset} className='reset-btn'>Reset</button>
                </div>                   
            </div>
  )
}