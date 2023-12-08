import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <ul className='flex items-center gap-2 list-none mx-auto my-5'>
        <li className='cursor-pointer border border-gray-300 rounded-sm px-1 py-1 text-sm'>
            <IoIosArrowBack />
        </li>
        <li className='cursor-pointer bg-black text-white rounded-sm px-[10px] py-[4px] text-sm'>
            1
        </li>
        <li className='cursor-pointer border border-gray-300 rounded-sm px-[10px] py-[4px] text-sm'>
            2
        </li>
        <li className='cursor-pointer border border-gray-300 rounded-sm px-[10px] py-[4px] text-sm'>
            3
        </li>
        <li className='cursor-pointer border border-gray-300 rounded-sm px-[10px] py-[4px] text-sm'>
            4
        </li>
        <li className='cursor-pointer border border-gray-300 rounded-sm px-[10px] py-[4px] text-sm'>
            5
        </li>
        <li className='cursor-pointer border border-gray-300 rounded-sm px-[10px] py-[4px] text-sm'>
            ...
        </li>
        <li className='cursor-pointer border border-gray-300 rounded-sm px-1 py-1 text-sm'>
            <IoIosArrowForward />
        </li>
    </ul>
  )
}

export default Pagination
