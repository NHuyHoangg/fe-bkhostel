import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import zaloSrc from "../../../assets/images/footer/zalo.png"
import { IoMdHeartEmpty } from "react-icons/io";

const OwnerDetail = ({owner}) => {
    return (
        <div className='flex flex-col items-center gap-4 px-3 py-4 border border-gray-300 rounded-md h-fit bg-[#FEBB02] ml-10 '>
            <div className='flex flex-col items-center gap-1 mb-2'>
                <FaRegUserCircle className='w-[48px] h-[45px] text-white' />
                <p className='text-base font-semibold'>{owner.fullName}</p>
            </div>

            <button className='flex items-center gap-2 justify-center rounded-md px-2 py-2 bg-[#13BB7B] w-full max-w-[250px]'>
                <FaPhone className='text-white'/>
                <p className='text-sm  font-semibold'>{owner.phoneNumber}</p>
            </button>
            <button className='flex items-center gap-2 justify-center rounded-md px-2 py-2 bg-white w-full max-w-[250px]'>
                <img src={zaloSrc} alt='zalo' className='w-[20px] h-20px'/>
                <p className='text-sm  font-semibold'>Nhắn Zalo</p>
            </button>
            <button className='flex items-center gap-2 justify-center rounded-md px-2 py-2 bg-white w-full max-w-[250px] hover:text-[#EE664C]'>
                <IoMdHeartEmpty className='w-[20px] h-[20px] '/>
                <p className='text-sm font-semibold'>Yêu thích tin</p>
            </button>
        </div>
    )
}

export default OwnerDetail;
