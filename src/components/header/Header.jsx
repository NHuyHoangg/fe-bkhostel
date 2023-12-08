import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartOutlined,
  LoginOutlined,
  UserAddOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import HoverDivider from '../common/HoverDivider';
const Header = memo((props) => {
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
