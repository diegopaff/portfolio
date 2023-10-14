import { smallProjectsList } from "../constants";

import { useEffect, useState } from 'react'


export function useItem(projectId) {
    
    const [activeProyect, setActiveProyect] = useState({});

    useEffect(()=>{
        smallProjectsList.forEach((item)=> {
            
            if (item.id === projectId){
                setActiveProyect(item);
                
            }
        })
    }, [projectId]);

   
    return activeProyect;
}