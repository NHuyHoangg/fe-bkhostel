import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

const baseURL = import.meta.env.VITE_BACKEND_API + '/users';
const authToken = localStorage.getItem('token')
// const config = {'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmQ3YTQyODJiYmE2MzJjZDVjZjBlMCIsInRva2VuVmVyc2lvbiI6MCwiaWF0IjoxNzAxNjczNTcyfQ.ddG0VTMD-ZE0dJxGQL5SbHtAQyqO2MlZ_U121M5B8gY"};
const config = {'Authorization': authToken};



const Profile = () => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        "username": "",
        "password": "",
        "role": "USER",
        "status": "ACTIVE",
        "email": "",
        "full_name": "",
        "phone": "",
        "avatar": "",
    });

    const [passwordVisible, setPasswordVisible] = useState(true)
    const [phoneVisible, setPhoneVisible] = useState(true)

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        console.log(base64)
        document.getElementById("avatar-img").src = URL.createObjectURL(file)
        document.getElementById("avatar-hidden").value = base64
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
        })
    }
    const handleSubmit = (e) => {
        const userData = {
            username: e.target.username.value,
            full_name: e.target.full_name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            avatar: e.target.avatar.value,
        }

        editUser(userData)
        navigate('/profile')
    }
    const getUser = async () => {
        console.log("get User")
        try {
            await axios.get(`${baseURL}/`, {headers: config}).then(res => setProfile(res.data));
        } catch (error) {
            const customError = new Error();
            customError.message = error.response.data.message;
            console.log(customError.message);
            throw customError;
        }

    };

    const editUser = async (userData) => {
        console.log(userData);
        try {
          const response = await axios.post(`${baseURL}/edit`, userData, {headers: config});
          console.log(response.data);
        } catch (error) {
          const customError = new Error();
          customError.message = error.response.data.message;
          console.log(customError.message);
          throw customError;
        }
      };

    useEffect(() => {
        getUser();
    }, [])
    return (
        <div className='justify-center items-center flex flex-col'>
            <Header></Header>
            <div className="grid grid-cols-8 gap-3 max-w-[1536px] mx-auto">
                <Sidebar item={2}></Sidebar>
                <div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6 ml-5">
                    <div className="py-4 mt-6 border-b border-gray rounded-md h-fit text-5xl">
                        Chỉnh sửa thông tin cá nhân
                    </div>

                    <form className="my-10 mr-10" onSubmit={handleSubmit}>
                        <div className="items-center flex justify-between mt-8">
                            <label className="inline-block [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]" htmlFor="email">Email</label>
                            <input className="px-3 inline-block float-right w-3/4 h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue={profile.email} disabled id="email" name="email"/>
                        </div>

                        <div className="items-start flex justify-between mt-8">
                            <label className="inline-block [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]" htmlFor="phone">Số điện thoại</label>
                            <input className="px-3 inline-block float-right w-3/4 h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" disabled={phoneVisible} defaultValue={profile.phone} id="phone" name="phone"/>
                        </div>

                        <div className="items-start flex justify-between mt-4">
                            <div className="inline-block"></div>
                            <button type='button' onClick={() => setPhoneVisible(!phoneVisible)}  className="text-[#0000ff] float-right w-3/4 text-left">Đổi số điện thoại</button>
                        </div>

                        <div className="items-start flex justify-between mt-8">
                            <label className="inline-block [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]" htmlFor="username">Tên hiển thị</label>
                            <input className="px-3 inline-block float-right w-3/4 h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue={profile.username} id="name" name="username"/>
                        </div>

                        <div className="items-start flex justify-between mt-8">
                            <label className="inline-block [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]" htmlFor="full_name">Họ và tên</label>
                            <input className="px-3 inline-block float-right w-3/4 h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue={profile.full_name}  id="full_name" name="full_name"/>
                        </div>

                        <div className="items-start flex justify-between mt-8">
                            <label className="inline-block [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]" htmlFor="password">Mật khẩu </label>
                            <input className="px-3 inline-block float-right w-3/4 h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="password" disabled={passwordVisible} defaultValue={profile.password} id="password" name="password"/>
                        </div>

                        <div className="items-start flex justify-between mt-4">
                            <div className="inline-block"></div>
                            <button type='button' onClick={() => setPasswordVisible(!passwordVisible)} className="text-[#0000ff] float-right w-3/4 text-left">Đổi mật khẩu</button>
                        </div>

                        <div className="items-start flex justify-between mt-8">
                            <label className="inline-block [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]" htmlFor="avatar">Ảnh đại diện</label>
                            <div className="inline-block float-right w-3/4 ">
                                <img src={profile.avatar} alt="avatar" id="avatar-img" className="w-48"/>
                            </div>
                        </div>

                        <div className="items-start flex justify-between mt-4">
                            <div className="inline-block"></div>
                            <div className="float-right w-3/4 ">
                                <input id="file" encType="multipart/form-data" type="file" name="file" onChange={e => handleFileRead(e)} />
                                <input id="avatar-hidden" className='hidden' type="text" name="avatar" value={convertBase64(profile.avatar)}/>
                                {/* <a href="#" className="text-[#000] px-8 mr-4 border-solid border border-[#cccccc] bg-[#f5f4f3]">Chọn file</a>
                                <span>avatar.png</span> */}
                            </div>
                        </div>

                        <button type="submit" className='justify-center items-center w-full rounded-md px-3 py-3 mt-8 mb-16 bg-[#0000FF]'>
                            <p className=' text-white text-3xl font-semibold'>Cập nhật</p>
                        </button>
                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}
export default Profile;