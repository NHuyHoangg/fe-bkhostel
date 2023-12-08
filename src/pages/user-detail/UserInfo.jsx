import { FaCamera } from "react-icons/fa";
import 'flowbite';
import LeftSideBar from "./components/LeftSideBar";
import Header from "./components/header";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const url = `https://bkhostel.hcmut.tech/admin/656a05505f358c9d0d473c67`;
const tokenUrl = `https://bkhostel.hcmut.tech/auth/sign-in`;
const submitLink = `https://bkhostel.hcmut.tech/admin/edit-user`;

const UserInfo = () => {
    const [infoUser, setInfoUser] = useState({
        id: "",
        username: "",
        email: "",
        full_name: "",
        phone: "",
        avatar: "",
        facebook: "",
        zalo: ""
    });
    const [alert, setAlert] = useState("invisible");
    const axiosInstance = axios.create({
        baseURL: tokenUrl,
    });
    const bodyValue = {
        "username": "HoaiTrang_Nguyen53",
        "password": "123456"
    };
    let token; // initial state
    axiosInstance.interceptors.request.use(async config => {
        if (!token) {
            const { data } = await axios.post(tokenUrl, bodyValue);
            token = data.token;
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config
    });
    const getData = async () => {
        try {
            const res = await axiosInstance.get(url);
            setInfoUser(res.data);
            console.log(res.data);

        } catch (error) {
            console.log(error.response);
        }
    };
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInfoUser(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        infoUser["id"] = infoUser["_id"];
        delete infoUser["_id"];

        try {
            const res = await axiosInstance.post(submitLink, infoUser);
            setInfoUser(infoUser);
            setAlert('visbible');
            console.log(res.data);
        } catch (error) {
            console.log(error.response);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const navigate = useNavigate();
    const navigateChangePassWord = () => {
        navigate('/admin/user/changepassword');
    }
    return (
        <div className="grid grid-cols-10 gap-3">
            <LeftSideBar />
            <div className="h-screen col-start-3 col-span-8 pl-3 text-lg bg-[#b6d6f2]">
                <Header />
                <div className="my-8 ml-14 mt-8 hover:cursor-pointer text-2xl font-semibold text-black">
                    UserList/{infoUser.full_name}
                </div>
                <div className="grid grid-cols-3 mx-14 bg-white text-[#797C7B] p-6 rounded-2xl">
                    <div className="flex flex-col">
                        <div className="ml-10">
                            <div className="mx-auto rounded-full bg-[#A6D4AE] xl:w-64 xl:h-64 lg:w-52 lg:h-52 md:w-36 md:h-36 sm:w-24 sm:h-24 absolute z-0 ">
                                <img className="rounded-full w-auto h-auto" src={infoUser.avatar} />
                            </div>
                            <div className="relative xl:ml-48 xl:mt-52 lg:ml-36 lg:mt-44 md:ml-24 md:mt-28 sm:ml-14 sm:mt-20 z-10 p-1.5 w-fit border bg-[#D9D9D9] rounded-full">
                                <FaCamera style={{ color: '#f5a201' }} />
                            </div>
                        </div>
                        <div className="relative mx-auto">
                            <button type="submit" class="mt-14 w-full text-white bg-[#00537A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order History</button>
                            <button onClick={navigateChangePassWord} type="submit" class="mt-2 w-full text-white bg-[#00537A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
                        </div>
                    </div>
                    <form className="col-start-2 col-span-3">
                        <div class="grid gap-6 mb-10 lg:grid-cols-2">
                            <div>
                                <input value={infoUser.username} onChange={handleChange} name="username" type="text" id="username" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name *" required />
                            </div>
                            <div>
                                <input value={infoUser.full_name} onChange={handleChange} name="full_name" type="text" id="full_name" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name *" required />
                            </div>
                            <div>
                                <input value={infoUser.email} onChange={handleChange} name="email" type="email" id="email" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address *" required />
                            </div>
                            <div>
                                <input value={infoUser.phone} onChange={handleChange} name="phone" type="tel" id="phone" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number *" required />
                            </div>
                            {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-80 border border-[#B6D6F2] bg-gray-50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select Roles<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            <div id="dropdown" class="hidden bg-gray-200 rounded-lg shadow w-64 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">Admin</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">User</a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div>
                                <input value={infoUser.avatar} onChange={handleChange} name="avatar" type="text" id="avatar" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Avatar" required />
                            </div> */}
                            <div>
                                <input value={infoUser.zalo} onChange={handleChange} name="zalo" type="text" id="zalo" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zalo" required />
                            </div>
                        </div>
                        <button onClick={handleSubmit} class="w-full text-white bg-[#25BEB9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        <div class={`${alert} flex items-center bg-blue-500 text-white text-sm font-bold mt-10 px-4 py-3 `} role="alert">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                            <p>Đổi mật khẩu thành công</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default UserInfo;
