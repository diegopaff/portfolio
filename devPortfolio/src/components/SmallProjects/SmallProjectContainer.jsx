import SmallProjectDetail from "./SmallProjectDetail"
import SmallProjectItem from './SmallProjectItem'
import { smallProjectsList } from '../../constants'

const SmallProjectsContainer = () => {

    
    
    return (
        <div className="w-[1200px] bg-slate-300 h-[600px] flex flex-row rounded-lg overflow-hidden">
            <ul className='basis-1/3  w-[40%]'>
            {smallProjectsList.map((projectInfo,index) => (
                    <SmallProjectItem
                        key={`smallProjec${index}`}
                        itemInfo={projectInfo}
                    />
            ))}
            </ul>
            <SmallProjectDetail/>
        </div>
    )
}

export default SmallProjectsContainer