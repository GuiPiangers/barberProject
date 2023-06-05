import { useEffect, useState } from "react"
import Services from "../../logic/core/ServiceScheduling"

export default function MySchedulings(){

    const [schedulings, setSchedulings] = useState([])
    useEffect(()=>{
        async function loadSchedulings(){
            const fireBaseScheduling = new Services
            setSchedulings(await fireBaseScheduling.search())
            console.log(schedulings)
        }
        loadSchedulings()
    }, [])

    return(
        <div>
            My Schedulins
            <ul>
                {schedulings.map((scheduling, index) =>
                    <li key={index}>{scheduling.date}</li>
                )}
            </ul>
        </div>
    )
}