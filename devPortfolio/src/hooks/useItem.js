import { smallProjectsList } from "../constants";

import { useEffect, useState } from 'react'


export function useItem(project) {
    const [activeProyect, setActiveProyect] = useState({});


    useEffect(()=>{
        smallProjectsList.forEach((item)=> {
            if (item.title === project.title){
                setActiveProyect(item);
            }
        })
    }, []);


    console.log(activeProyect)
    return {activeProyect}
}