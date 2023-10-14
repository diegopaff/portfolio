import SmallProjectDetail from "./SmallProjectDetail"
import SmallProjectItem from './SmallProjectItem'
import { smallProjectsList } from '../../constants'
import { useEffect, useState } from "react"
import { useItem } from "../../hooks/useItem"

const SmallProjectsContainer = () => {

    const [activeProjectId, setActiveProjectId] = useState('RemoteJobDevSearch');

    
    return (
        <div className="w-[1200px] bg-slate-300 h-[600px] flex flex-row rounded-lg overflow-hidden">
            <ul className='basis-1/3  w-[40%]'>
            {smallProjectsList.map((projectInfo,index) => (
                    <SmallProjectItem
                        key={`smallProjec${index}`}
                        itemInfo={projectInfo}
                        setActiveProjectId={setActiveProjectId}
                    />
            ))}
            </ul>
            <SmallProjectDetail activeProjectId={activeProjectId}/>
        </div>
    )
}

export default SmallProjectsContainer