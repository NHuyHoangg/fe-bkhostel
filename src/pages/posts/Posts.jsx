/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/display-name
import { memo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import AdminPagination from "../../components/adminPagination/AdminPagination";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidDetail } from "react-icons/bi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LeftSideBar from "../user-detail/components/left-side-bar";

const Posts = memo(() => {
  const originPosts = [
    {
      id: 1,
      postName: "Nhà mặt tiền",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Đã xác nhận",
    },
    {
      id: 2,
      postName: "Ký túc xá",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Đang chờ",
    },
    {
      id: 3,
      postName: "Nhà nguyên căn",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Đã xác nhận",
    },
    {
      id: 4,
      postName: "Phòng 10m2",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Đang chờ",
    },
    {
      id: 5,
      postName: "Phòng 1 người",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Đang chờ",
    },
    {
      id: 6,
      postName: "Nhà cho thuê",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Đã xác nhận",
    },
    {
      id: 7,
      postName: "Chung cư",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Đã xác nhận",
    },
  ];
  const { state } = useLocation();
  console.log(state);

  const [page, setPage] = useState({
    current: 0,
    quantity: 3,
  });
  const [posts, setPosts] = useState(() => {
    if (state) {
      const handleType = state?.verifiedId ? "verify" : "delete";
      const handleId = state?.verifiedId ?? state?.deletedId;

      let len = originPosts.length;
      let i = 0;
      while (i < len) {
        if (originPosts[i].id == handleId) break;
        i++;
      }
      if (handleType === "verify") {
        originPosts[i].status = "Đã xác nhận";
      } else {
        originPosts.splice(i, 1);
      }
      return originPosts;
    }
    return originPosts;
  });
  const [seletedFilter, setSelectedFilter] = useState("All");
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    setPage({
      current: newPage,
      quantity: page.quantity,
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleDeletedItem = (id) => {
    let temp = posts.filter((item) => item.id !== id);
    setPosts(temp);
  };
  const handleFilter = (type) => {
    setSelectedFilter(type);
    if (type !== seletedFilter) {
      if (type === "All") {
        setPosts(originPosts);
      } else {
        let filteredPosts = originPosts.filter((item) => {
          return item.status === type;
        });
        setPosts(filteredPosts);
      }
    }
  };
  
  //CSS Style variable
  const activeFilter = "bg-[#25BEB9] text-white";
  const nonactiveFilter =
    "hover:bg-[#25BEB9] hover:bg-opacity-50 hover:text-white border border-[#25BEB9]";

  return (
    <div className="grid grid-cols-12">
      <LeftSideBar/>
      <div className="w-auto col-start-3 col-span-10 h-[100vh] bg-[#e8f1fd]">
        <div className="pt-8 ml-8">
          <h2 className="font-bold text-3xl">Danh sách bài đăng</h2>
          <div className="pr-8 mt-4">
            <div className="bg-white w-full rounded-xl py-4 px-4 relative min-h-[600px]">
              <div className="flex justify-between flex-col md:flex-row">
                <div className="w-full md:w-1/2 lg:w-1/3 flex justify-between flex-col md:flex-row mb-2 md:mb-0">
                  <button
                    className={`rounded-lg mb-1 md:mb-0 md:px-2 lg:px-5 ml-2 md:ml-0 ${
                      seletedFilter === "All" ? activeFilter : nonactiveFilter
                    }`}
                    onClick={() => {
                      handleFilter("All");
                    }}
                  >
                    Tất cả
                  </button>
                  <button
                    className={`rounded-lg mb-1 md:mb-0 md:px-2 lg:px-5 ${
                      seletedFilter === "Đang chờ"
                        ? activeFilter
                        : nonactiveFilter
                    } ml-2`}
                    onClick={() => {
                      handleFilter("Đang chờ");
                    }}
                  >
                    Đang chờ
                  </button>
                  <button
                    className={`rounded-lg mb-1 md:mb-0 md:px-2 lg:px-5 ${
                      seletedFilter === "Đã xác nhận"
                        ? activeFilter
                        : nonactiveFilter
                    } ml-2`}
                    onClick={() => {
                      handleFilter("Đã xác nhận");
                    }}
                  >
                    Đã xác nhận
                  </button>
                </div>
                <div className="flex md:ml-2">
                  <form className="flex items-center w-full">
                    <label htmlFor="simple-search" className="sr-only">
                      Tìm kiếm
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <IoSearchOutline className="w-6 h-6 text-black" />
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        placeholder="Tìm kiếm nội dung ở đây..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="h-full px-2 md:px-7 ms-3 text-sm font-medium text-white bg-[#25BEB9] rounded-lg hover:scale-105 transition focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Tìm kiếm
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="grid grid-cols-16 font-bold bg-[#b6d6f2] rounded-xl py-2 text-sm md:text-xl">
                  <div className="hidden md:col-span-1">ID</div>
                  <div className="col-span-3">Tên bài đăng</div>
                  <div className="col-span-2">Người đăng</div>
                  <div className="col-span-3">Ngày đăng</div>
                  <div className="col-span-3">Địa điểm</div>
                  <div className="col-span-2">Trạng thái</div>
                  <div className="col-span-2">Thao tác</div>
                </div>
                {posts.length
                  ? posts.map((post, idx) => {
                      return (
                        <div
                          className="grid grid-cols-16 py-2 text-xs md:text-xl md:hover:bg-blue-100 hover:rounded-lg"
                          key={idx}
                          onClick={()=>navigate("../admin/posts/detail",{state: post})}
                        >
                          <div className="hidden md:col-span-1">{post.id}</div>
                          <div className="col-span-4 md:col-span-3">
                            {post.postName}
                          </div>
                          <div className="col-span-2">{post.seller}</div>
                          <div className="col-span-3">{post.date}</div>
                          <div className="col-span-3">{post.location}</div>
                          <div className="col-span-3 md:col-span-2">
                            {" "}
                            <span
                              className={`${
                                post?.status == "Đã xác nhận"
                                  ? "bg-[#59d9cc]"
                                  : "bg-[#f5a201]"
                              } text-white px-1 lg:px-4 md:text-sm lg:py-1 inline-block rounded-sm lg:rounded-xl`}
                            >
                              {post.status}
                            </span>
                          </div>
                          <div className="col-span-1 md:col-span-2 flex justify-center">
                            <Link to={"../admin/posts/detail"} state={post}>
                              <BiSolidDetail className="hidden lg:block mr-1 md:mr-2 lg:mr-4 w-6 h-6 cursor-pointer hover:scale-105 hover:text-[rgb(57,197,200)]" />
                            </Link>
                            <BsFillTrash3Fill
                              onClick={() => handleDeletedItem(post.id)}
                              className="mt-[-4px] md:mt-0 w-6 h-6 cursor-pointer hover:scale-105 hover:text-[rgb(57,197,200)]"
                            />
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
              <div className="mt-8 lg:mt-12">
                <span className="ml-4">
                  Hiển thị 1 đến {posts.length} của {posts.length} mục
                </span>
                <div className="flex justify-center text-center">
                  <AdminPagination
                    handleChange={handlePageChange}
                    pageStatus={page}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Posts;
