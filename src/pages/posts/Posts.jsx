/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/display-name
import { memo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import AdminPagination from "../../components/adminPagination/AdminPagination";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidDetail } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Posts = memo(() => {
  const [page, setPage] = useState({
    current: 0,
    quantity: 3,
  });
  const [posts, setPosts] = useState([
    {
      id: 1,
      postName: "Nhà mặt tiền",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Verified",
    },
    {
      id: 2,
      postName: "Ký túc xá",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Pending",
    },
    {
      id: 3,
      postName: "Nhà nguyên căn",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Verified",
    },
    {
      id: 4,
      postName: "Phòng 10m2",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Pending",
    },
    {
      id: 5,
      postName: "Phòng 1 người",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Pending",
    },
    {
      id: 6,
      postName: "Nhà cho thuê",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Verified",
    },
    {
      id: 7,
      postName: "Chung cư",
      seller: "Đức Phan",
      date: "17:45 03-11-2023",
      location: "Tp. Hồ Chí Minh",
      status: "Verified",
    },
  ]);
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
  };

  const handleViewDetail = (post) => {};

  const activeFilter = "bg-[#25BEB9] text-white";
  const nonactiveFilter =
    "hover:bg-[#25BEB9] hover:bg-opacity-50 hover:text-white border border-[#25BEB9]";

  return (
    <div className="w-full h-[100vh] bg-blue-200">
      <div className="pt-8 ml-8">
        <h2 className="font-bold text-3xl">Posts</h2>
        <div className="pr-8 mt-4">
          <div className="bg-white w-full rounded-xl py-4 px-4 relative min-h-[600px]">
            <div className="flex justify-between flex-col md:flex-row">
              <div className="w-1/2 lg:w-1/3 flex justify-between flex-col md:flex-row">
                <button
                  className={`rounded-lg px-5 lg:px-20 ${
                    seletedFilter === "All" ? activeFilter : nonactiveFilter
                  }`}
                  onClick={() => {
                    handleFilter("All");
                  }}
                >
                  All
                </button>
                <button
                  className={`rounded-lg px-5 lg:px-20 ${
                    seletedFilter === "Pending" ? activeFilter : nonactiveFilter
                  } ml-2`}
                  onClick={() => {
                    handleFilter("Pending");
                  }}
                >
                  Pending
                </button>
                <button
                  className={`rounded-lg px-5 lg:px-20 ${
                    seletedFilter === "Verified"
                      ? activeFilter
                      : nonactiveFilter
                  } ml-2`}
                  onClick={() => {
                    handleFilter("Verified");
                  }}
                >
                  Verified
                </button>
              </div>
              <div className="flex">
                <form className="flex items-center w-full">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <IoSearchOutline className="w-6 h-6 text-black" />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                      placeholder="Search content here..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-full px-7 ms-3 text-sm font-medium text-white bg-[#25BEB9] rounded-lg hover:scale-105 transition focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="grid grid-cols-16 font-bold bg-[#b6d6f2] rounded-xl py-2">
                <div className="col-span-1">ID</div>
                <div className="col-span-3">Post Name</div>
                <div className="col-span-2">Seller</div>
                <div className="col-span-3">Post Date</div>
                <div className="col-span-3">Location</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Action</div>
              </div>
              {posts.length
                ? posts.map((post, idx) => {
                    return (
                      <div className="grid grid-cols-16 py-2" key={idx}>
                        <div className="col-span-1">{post.id}</div>
                        <div className="col-span-3">{post.postName}</div>
                        <div className="col-span-2">{post.seller}</div>
                        <div className="col-span-3">{post.date}</div>
                        <div className="col-span-3">{post.location}</div>
                        <div className="col-span-2">
                          {" "}
                          <span
                            className={`${
                              post?.status == "Verified"
                                ? "bg-[#59d9cc]"
                                : "bg-[#f5a201]"
                            } text-white px-1 lg:px-5 inline-block rounded-sm lg:rounded-xl`}
                          >
                            {post.status}
                          </span>
                        </div>
                        <div className="col-span-2 flex justify-center">
                          <Link to={"/posts/detail"} state={post}>
                            <BiSolidDetail
                              className="mr-1 md:mr-2 lg:mr-4 w-6 h-6 cursor-pointer hover:scale-105 hover:text-[rgb(57,197,200)]"
                            />
                          </Link>
                          <BsFillTrash3Fill
                            onClick={() => handleDeletedItem(post.id)}
                            className="w-6 h-6 cursor-pointer hover:scale-105 hover:text-[rgb(57,197,200)]"
                          />
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div className="my-4 absolute bottom-0 left-0 right-0">
              <span className="ml-4">
                Showing 1 to {posts.length} of {posts.length} entries
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
  );
});

export default Posts;
