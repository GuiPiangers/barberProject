import React, {useState, useEffect} from "react";

export default function useWindowSize(){
    const [windowSize, setWindowSize] = useState({windowHeight: window.innerHeight, windowWidth: window.innerWidth})
    useEffect(()=>{
        function handleResize(){
            setWindowSize({windowHeight: window.innerHeight, windowWidth: window.innerWidth})
        }

        window.addEventListener('resize', handleResize)

        return()=>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return windowSize
}
