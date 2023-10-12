import React from 'react'
import { smallProjectsList } from '../../constants'
import SmallProjectItem from './SmallProjectItem'

const SmallProjectsNav = () => {
  return (
    <ul className='basis-1/3 bg-green-300 w-[40%]'>
        {smallProjectsList.map((projectInfo,index) => (
            <SmallProjectItem 
                key={`smallProjec${index}`}
                itemInfo={projectInfo} />
        )    
        )}
    </ul>
  )
}

export default SmallProjectsNav