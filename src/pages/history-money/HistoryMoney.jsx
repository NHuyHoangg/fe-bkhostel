import LeftSideBar from "./components/LeftSideBar";
import axios from "axios";
import { useState, useEffect } from "react";

const url = `https://bkhostel.hcmut.tech/users/`;
const tokenUrl = `https://bkhostel.hcmut.tech/auth/sign-in`;
const submitLink = `https://hoang.hcmut.tech/recharge/create_payment_url`;

const HistoryMoney = () => {
    const [infoUser, setInfoUser] = useState({});
    const [amount, setAmount] = useState({
        amount: 0,
        language: "vn"
    });
    const axiosInstance = axios.create({
        baseURL: tokenUrl,
    });
    const bodyValue = {
        "username": "username",
        "password": "123456"
    };
    let token; // initial state
    axiosInstance.interceptors.request.use(async config => {
        if (!token) {
            const { data } = await axios.post(tokenUrl, bodyValue);
            token = data.token;
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
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
        setAmount(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async () => {
        try {
            const res = await axiosInstance.post(submitLink, amount);
            setAmount(amount);
            console.log(res.data);

        } catch (error) {
            console.log(error.response);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="grid grid-cols-8 gap-3 mr-20 ">
            <LeftSideBar />
            <div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6 ml-5">
                <div className="px-3 py-4 mt-6 border-b border-gray rounded-md h-fit text-5xl">
                    NẠP TIỀN
                </div>
                <div className="px-3 py-4 mt-3 bg-gray-300 border-b border-gray rounded-md h-fit text-2xl">
                    <div>Số dư ví</div>
                    <div className="pt-10">{infoUser.balance}</div>
                </div>
                <div className="text-2xl py-3 mt-6">
                    Phương thức nạp tiền
                </div>
                <div className="px-3 py-3 bg-gray-300 border-b border-gray rounded-md h-40 text-2xl">
                    VNPAY
                </div>
                <div className="col-start-3 col-span-6 text-2xl py-3 mt-6">
                    Số tiền nạp
                </div>
                <input onChange={handleChange} value={amount.amount} name="amount" className="px-3 py-3 border border-gray rounded-md h-14 text-2xl" />

                <button onClick={handleSubmit} className='justify-center items-center rounded-md px-3 py-3 mt-8 mb-16 bg-[#0000FF]'>
                    <p className='text-sm text-white text-3xl font-semibold'>Nạp Tiền</p>
                </button>
            </div>
        </div>
    )
}
export default HistoryMoney;
