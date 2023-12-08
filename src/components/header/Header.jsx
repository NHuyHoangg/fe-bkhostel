import { memo, useState, useRef, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import {
  HeartOutlined,
  LoginOutlined,
  UserAddOutlined,
  PlusCircleOutlined,
  CaretDownOutlined,
  UserOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import HoverDivider from '../common/HoverDivider';
import defaultUser from '../../assets/images/header/default-user.png';
const Header = memo((props) => {
  const navigate = useNavigate();
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {
    let optionSelectionHandler = (e) => {
      if (!optionsRef.current?.contains(e.target)) {
        setIsDropdownOpened(false);
        console.log(optionsRef.current);
      }
    };
    document.addEventListener('mousedown', optionSelectionHandler);
    return () =>
      document.removeEventListener('mousedown', optionSelectionHandler);
  });
  const isAuthenticated = !!localStorage.getItem('token');
  const logoutUser = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <nav className="container mx-auto px-20 py-4 border-b-2 border-b-gray-300">
      <div className="flex flex-col justify-between items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-auto">
        <span className="text-4xl text-cyan-600 font-semibold">
          <Link to="/">BKHostel</Link>
        </span>
        <div className="flex flex-col items-start  justify-center md:items-center md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-16">
          {/* Favorite  */}
          <div className="flex items-center justify-center space-x-2">
            <HeartOutlined />
            <p className="font-medium">Yêu thích</p>
          </div>
          {isAuthenticated ? (
            <div className="options-container relative" ref={optionsRef}>
              <div
                onClick={() => setIsDropdownOpened((cur) => !cur)}
                className="flex justify-center items-center space-x-2"
              >
                <img
                  src={defaultUser}
                  className="h-[30px] w-[30px] rounded-full border-solid border border-opacity-75 border-black"
                ></img>
                <CaretDownOutlined />
              </div>
              <div
                className={`${
                  isDropdownOpened ? 'block' : 'hidden'
                } z-10 absolute  left-[-135%] border mt-2  bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-48 mx-auto`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 mx-auto">
                  <li className="flex justify-start items-center space-x-1 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <UserOutlined />
                    <p>Trang cá nhân</p>
                  </li>
                  <li className="flex justify-start items-center space-x-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <PlusCircleOutlined />
                    <p>Đăng tin</p>
                  </li>
                  <li className="flex justify-start items-center space-x-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <HeartOutlined />
                    <p>Trang yêu thích</p>
                  </li>
                  <li className="flex justify-start items-center space-x-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <DollarOutlined />
                    <p>Nạp tiền</p>
                  </li>
                  <li className="flex justify-start items-center space-x-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <HeartOutlined />
                    <p>Trang yêu thích</p>
                  </li>

                  <li onClick={logoutUser} className="flex justify-start items-center space-x-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <p className="text-red-600">Đăng xuất</p>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              {/* Login  */}
              <div className="flex items-center justify-center space-x-2">
                <LoginOutlined />
                <p className="font-medium">
                  <Link to="/login">Đăng nhập</Link>
                </p>
              </div>
              {/* Register */}
              <div className="flex items-center justify-center space-x-2">
                <UserAddOutlined />
                <p className="font-medium">
                  <Link to="/register">Đăng ký</Link>
                </p>
              </div>
            </>
          )}

          <button
            type="button"
            className="flex space-x-2 items-center justify-center bg-cyan-600 p-4 px-9 text-center text-white rounded-lg"
          >
            <p className="font-medium">Đăng tin</p>
            <PlusCircleOutlined />
          </button>
          {/* Post */}
        </div>
      </div>
      {/* Categories List */}

      <div className="hidden md:flex justify-between items-center mt-4 text-[13px]  md:space-x-4 mx-auto">
        {/* <div>Quà theo lễ</div> */}
        <div className="group hover:cursor-pointer">
          <span>
            <Link to="/">Trang chủ</Link>
          </span>
          <HoverDivider />
        </div>
        <div className="group hover:cursor-pointer">
          <span>Cho thuê phòng trọ</span>
          <HoverDivider />
        </div>

        <div className="group hover:cursor-pointer">
          <span>Nhà cho thuê</span>
          <HoverDivider />
        </div>
        <div className="group hover:cursor-pointer">
          <span>Căn hộ cho thuê</span>
          <HoverDivider />
        </div>
        <div className="group hover:cursor-pointer">
          <span>Tìm người ở ghép</span>
          <HoverDivider />
        </div>
        <div className="group hover:cursor-pointer">
          <span>Tin tức</span>
          <HoverDivider />
        </div>
        <div className="group hover:cursor-pointer">
          <span>Bảng giá dịch vụ</span>
          <HoverDivider />
        </div>
      </div>
    </nav>
  );
});

export default Header;
