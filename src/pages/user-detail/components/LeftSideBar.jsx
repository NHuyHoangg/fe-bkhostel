import { PiTelevision } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import UserDetail from "./UserDetail";
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import 'flowbite';

const style = {
    color: '#25BEB9', fontSize: '100%'
}
const style_list = "flex flex-row items-center pl-3 ml-2 hover:bg-[#B6D6F2] rounded-3xl";
const LeftSideBar = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        if (show == false) return setShow(true);
        else return setShow(false);
    }
    const navigate = useNavigate();
    const navigateUserInfo = () => {
        navigate('/admin/userInfo');
    }
    return (
        <div className=" h-screen col-start-1 col-span-2 pl-3 lg:text-lg md:text-md sm:text-sm bg-white">
            <div className="my-8 ml-4 mb-3 hover:cursor-pointer lg:text-4xl md:text-3xl font-semibold text-[#0891B2]">BKHOSTEL</div>
            <div className={style_list}>
                <PiTelevision style={style} />
                <div className="my-8 hover:cursor-pointer ml-2">Statistics</div>
            </div>
            <div className={style_list}>
                <RxAvatar style={style} />
                <div onClick={navigateUserInfo} className="my-8 hover:cursor-pointer ml-2">Users</div>

                {show === true ? <RiArrowDownSFill onClick={handleClick} style={{ marginLeft: '105px', fontSize: '20px' }} />
                    : <RiArrowDropRightFill onClick={handleClick} style={{ marginLeft: '100px', fontSize: '30px' }} />}
            </div>
            {show == true ? <UserDetail /> : <></>}
            <div className={style_list}>
                <CiCreditCard2 style={style} />
                <div className="my-8 hover:cursor-pointer ml-2">Post</div>
            </div>
            <div className={style_list}>
                <IoCartOutline style={style} />
                <div className="my-8 hover:cursor-pointer ml-2">Pricing</div>
            </div>
        </div>
    )
}
export default LeftSideBar;
