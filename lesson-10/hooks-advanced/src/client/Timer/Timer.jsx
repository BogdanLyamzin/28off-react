import {useState, useEffect} from "react";

import styles from "./Timer.module.scss";

const Timer = ()=>{
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(()=>{
        let id = null;
        if(start){
            id = setInterval(()=>{
                console.log("tik")
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            setTime(0);
            clearInterval(id)
        }

        return ()=> {
            console.log("component unmount");
            clearInterval(id);
        }
    }, [start])

    return (
        <div className={styles.container}>
            <div className={styles.time}>{time}</div>
            <button onClick={()=> setStart(true)} className={styles.start}>Start</button>
            <button onClick={()=> setStart(false)} className={styles.stop}>Stop</button>
        </div>
    )
}

export default Timer;