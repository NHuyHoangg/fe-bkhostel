import React from 'react'
import heartSrc from '../../../assets/images/heart/heart.png'

const EmptySection = () => {
  return (
    <div className='flex flex-col items-center mb-2 w-full'>
        <div className='w-[150px] h-[150px]'>
            <img className='object-cover' src={heartSrc}/>
        </div>
        <p className='text-base text-[#EE664C]'>Danh sách rỗng</p>
    </div>
  )
}

export default EmptySection
