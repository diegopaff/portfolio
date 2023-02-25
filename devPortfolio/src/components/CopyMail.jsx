import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { AiFillCheckCircle } from 'react-icons/ai'

const CopyMail = () => {
    const [copied, setCopied] = useState(false);
    const CopyHandler = () => {
        setCopied(true);
        setTimeout(() => {setCopied(false)}, 3000);
    }
  return (
    <div className='flex flex-col mt-9 items-center gap-3 font-poppins text-gray-500 relative'>
        <p className='font-regular text-xs'> Via mail at</p>
        <CopyToClipboard  text='difercuru@gmail.com'>
            <div onClick={CopyHandler} className={`py-3 flex justify-center items-center shadow w-[200px] cursor-pointer bg-[#0F172A] hover:bg-[#7477FF] focus:shadow-outline focus:outline-none hover:text-[#0F172A] font-regular rounded h-9
                            before:content-["difercuru@gmail.com"] hover:before:content-["Copy_to_Clipboard"]`}> 
            </div>
        </CopyToClipboard>
        <p className='font-regular text-xs mt-6'> Or by completing this form</p>
        {copied ? <span className='flex flex-row justify-center items-center gap-3  absolute top-[28px] bg-green-500 w-[200px] h-9 rounded-sm transition-all duration-500 text-center'> <AiFillCheckCircle className='text-white'/> <p>Email copied</p> </span> : '' }
    </div>
  )
}

export default CopyMail