import React, {useState, useEffect} from "react";

export default function useWindowSize(){
    const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth])
    useEffect(()=>{
        function handleResize(){
            setWindowSize([window.innerHeight, window.innerWidth])
        }

        window.addEventListener('resize', handleResize)

        return()=>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return windowSize
}
