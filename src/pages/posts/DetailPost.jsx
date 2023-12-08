/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/display-name
import { memo, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Carousel from "../../components/admin/Carousel";
import Gallery from "../../components/admin/Gallery";
import LeftSideBar from "../user-detail/components/left-side-bar";

const DetailPost = memo((props) => {
  let { state } = useLocation();
  const navigate = useNavigate();
  let post = state; // Sau này sẽ sử dụng biến post
  const imageUrl =
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D";

  const handleVerified = () => {
    navigate("../admin/posts", { state: { verifiedId: post.id } });
  };
  const handleDelete = () => {
    navigate("../admin/posts", { state: { deletedId: post.id } });
  };
  return (
    <div className="grid grid-cols-12">
      <LeftSideBar />
      <div className="w-auto col-start-3 col-span-10 bg-[#e8f1fd] p-0 m-0 box-border">
        <div className="p-8 ml-8">
          <h2 className="font-bold text-3xl">
            <Link to={"../admin/posts"} className="underline hover:text-blue-600">
              Danh sách bài đăng
            </Link>{" "}
            / Chi tiết
          </h2>
          <div className="pr-8 mt-4">
            <div className="text-right text-md md:text-2xl mb-2">
              <button
                className=" py-2 px-8 bg-[#25BEB9] text-white mr-8 rounded-2xl hover:scale-105 transition"
                onClick={handleVerified}
              >
                Xác nhận
              </button>
              <button
                className="py-2 px-8 bg-red-600 text-white mr-4 rounded-2xl hover:scale-105 transition"
                onClick={handleDelete}
              >
                Xóa
              </button>
            </div>
            <div>
              <div className="md:grid md:grid-cols-12 md:gap-8 mb-4 ">
                <div className="md:col-span-5 lg:col-span-4">
                  <div className="md:h-full">
                    <div className={`w-full h-80 md:h-[60%]`}>
                      <Carousel />
                    </div>
                    <div className="hidden md:block md:h-[25%] md:mt-2">
                      <Gallery />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 lg:col-span-8">
                  <div className="mt-2 md:mt-0">
                    <div className="text-red-600 text-2xl mb-4">
                      <p>
                        Phòng Master Tolet riêng Căn hộ Chung cư Era Town Đức
                        Khải, Phường Phú Mỹ, Quận 7
                      </p>
                    </div>
                    <p className="mb-4">
                      Cần bán gấp đồng hồ như mẫu, giá cả thương lượng
                    </p>
                    <p className="text-red-600 font-bold text-3xl mb-4">
                      2.100.000 đ
                    </p>
                    <div className="bg-white rounded-lg p-4 lg:p-8">
                      <p className="font-bold mb-4 text-3xl">Người đăng bài</p>
                      <div className="md:grid md:grid-rows-2 md:grid-cols-2 mb-4 md:gap-4">
                        <div>
                          <p className="font-semibold">Họ tên</p>
                          <p className="text-sm">Nguyễn Văn Anh</p>
                        </div>
                        <div>
                          <p className="font-semibold">Địa chỉ</p>
                          <p className="text-sm">Số 1 Võ Văn Ngân</p>
                        </div>
                        <div>
                          <p className="font-semibold">Địa điểm</p>
                          <p className="text-sm">Tp. Hồ Chí Minh</p>
                        </div>
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-sm">0898354444</p>
                        </div>
                      </div>
                      <div>
                        <button className="w-full block rounded-lg bg-gray-400 py-2">
                          Liên hệ người đăng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <p className="font-bold text-2xl text-[#25BEB9]">Mô tả</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident doloribus vero voluptate iure libero totam officia
                  reiciendis ullam culpa vel minima, maxime expedita odio
                  nostrum quod aperiam? Natus nam modi cum repellendus rerum,
                  cupiditate reprehenderit illo dolore sit repudiandae in
                  corporis. Harum voluptas nemo nesciunt, consequatur totam
                  sint. Non, nemo odio! Illum sed praesentium nulla vitae cumque
                  aspernatur magnam alias. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Consequuntur, corporis
                  necessitatibus. Saepe voluptas totam est natus in possimus
                  doloribus. Ullam consequatur recusandae iste dolorum
                  perspiciatis possimus doloribus error quasi quia eius. Sed
                  quidem alias modi. Vitae beatae assumenda perferendis labore
                  velit maiores excepturi molestiae fugit blanditiis. Blanditiis
                  tenetur natus architecto quis voluptate eius ad, tempora
                  dolorum nulla temporibus ipsum perferendis quas quos repellat.
                  Maiores aliquam, soluta, velit laborum nisi fugiat ea quidem
                  consectetur nulla accusamus fugit tempore natus quibusdam
                  molestiae omnis pariatur obcaecati temporibus quam quasi
                  laudantium? Necessitatibus repellat, officia omnis vitae ab
                  suscipit placeat maxime eaque voluptate itaque esse cum
                  nostrum culpa debitis qui vero fugiat doloribus consectetur
                  consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailPost;
