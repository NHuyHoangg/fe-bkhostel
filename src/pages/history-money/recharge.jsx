import axios from "axios";
import LeftSideBar from "./components/LeftSideBar";
import { useEffect, useState } from "react";

const url = `https://bkhostel.hcmut.tech/recharge/656a913619f0d4c6a3d30039`;
const tokenUrl = `https://bkhostel.hcmut.tech/auth/sign-in`;

const Recharge = () => {
    const [infoUser, setInfoUser] = useState([]);
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
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="grid grid-cols-8 gap-3 mr-20 ">
            <LeftSideBar />
            <div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6  ">
                <div className="px-3 py-4 mt-6 border-b border-gray rounded-md h-fit text-5xl mb-6">
                    LỊCH SỬ NẠP TIỀN
                </div>
                <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 border-2">
                    <thead class="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Ngày nạp tiền
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Mã giao dịch
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Số tiền
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Phương thức
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Trạng thái
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {infoUser.map((user, i) => (
                            <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4 grid-cols-6 border-r-2">
                                    {user.date}
                                </td>
                                <td class="px-6 py-4 border-r-2">
                                    {user._id}
                                </td>
                                <td class="px-6 py-4 border-r-2">
                                    {user.amount}
                                </td>
                                <td class="px-6 py-4 border-r-2">
                                    {user.method}
                                </td>
                                <td class="px-6 py-4 border-r-2">
                                    {user.status}
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Recharge;