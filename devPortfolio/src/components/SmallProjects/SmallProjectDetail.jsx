import React from 'react';
import { useItem } from '../../hooks/useItem';
import './SmallProjectsStyles.css';

const SmallProjectDetail = ( { activeProjectId } ) => {

  const { title , thumbnail} = useItem(activeProjectId);

  
  return (
    <div style={{'--image-url': `url(${thumbnail})`}} 
    className={`basis-2/3 bg-[image:var(--image-url)] bg-contain relative`}>
      <div className='absolute bg-gradient-to-r from-[rgba(15,23,42,1)] to-[rgba(15,23,42,0.3)] h-full w-full'></div> 
      <p className=' text-black'>{title}</p> 
    </div>
  )
}

export default SmallProjectDetail