import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const baseURL = import.meta.env.VITE_BACKEND_API + '/users';
const authToken = localStorage.getItem('token')
const config = {'Authorization': authToken};

const Sidebar = (props) => {
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

  const [active, setActive] = useState([0,0,0,0,0])
  const historyMoneny = () => {
    navigate('/history-money', { state: { profile, authToken } });
  };
  const recharge = () => {
    navigate('/recharge', { state: { profile, authToken } });
  };
  const checkAuth = () => {
    if (authToken === null) navigate('/login');
  }

  const logoutUser = () => {
      localStorage.removeItem('token');
      navigate('/login');
  };

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

  const activeItem = (props) => {
    const items = [0,0,0,0,0];
    // eslint-disable-next-line react/prop-types
    items[props.item] = 1
    setActive([...items])

    // console.log(items)
  }

  useEffect(() => {
    checkAuth();
    activeItem(props);
    getUser();
  }, [])

  return (
      <div className="font-semibold row-start-1 row-span-7 col-start-1 col-span-2 text-lg bg-[#F5F4F3]">
          <div className="py-8 grid grid-cols-2">
              <div className="ml-4 grid grid-cols-2">
                  <div className="w-20 h-20 rounded-full bg-white items-center overflow-hidden">
                      <img src={profile.avatar} alt="avatar" className='w-full h-full'/>
                  </div>
                  <div className="pl-3 pt-3 items-center justify-center">
                      <div className="hover:cursor-pointer">{profile.username}</div>
                      <div>{profile.phone}</div>
                  </div>
              </div>
          </div>
          <a href="./post-new">
            <div className={active[0]? "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item bg-[#E7E6EC]" : "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item"}>
                Đăng tin cho thuê
            </div>
          </a>
              <a href="./post-history">
                <div className={active[1]? "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item bg-[#E7E6EC]" : "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item"}>
                      Lịch sử cho thuê
                </div>
              </a>
              <a href="./profile">
                <div className={active[2]? "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item bg-[#E7E6EC]" : "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item"}>
                      Thông tin cá nhân
                </div>
              </a>
              <a href="./recharge">
                <div onClick={recharge} className={active[3]? "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item bg-[#E7E6EC]" : "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item"}>
                      Nạp tiền
                </div>
              </a>
              <a href="./history-money">
                <div onClick={historyMoneny} className={active[4]? "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item bg-[#E7E6EC]" : "my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC] item"}>
                      Lịch sử nạp tiền
                </div>
              </a>
              <button onClick={logoutUser} className=''>
                <div className="my-1 p-3 hover:cursor-pointer hover:bg-[#E7E6EC]">
                      Thoát
                </div>
              </button>
      </div>
  )
}

export default Sidebar;
