/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/display-name
import { memo, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../components/admin/Carousel";
import Gallery from "../../components/admin/Gallery";


const DetailPost = memo((props) => {
  let {state} = useLocation();
  let post = state; // Sau này sẽ sử dụng biến post
  const imageUrl =
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="w-full bg-blue-200 p-0 m-0 box-border">
      <div className="py-8 ml-8">
        <h2 className="font-bold text-3xl">Posts / Detail</h2>
        <div className="pr-8 mt-4">
          <div>
            <div className="md:grid md:grid-cols-12 md:gap-8 mb-4 md:h-[480px]">
              <div className="md:col-span-5 lg:col-span-4 h-full">
                <div className="md:h-full">
                  <div className={`w-full h-80 md:h-[60%]`}>
                    <Carousel/>
                  </div>
                  <div className="hidden md:block md:h-[25%] md:mt-2">
                      <Gallery/>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <div>
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
                    <p className="font-bold mb-4 text-3xl">Seller</p>
                    <div className="md:grid md:grid-rows-2 md:grid-cols-2 mb-4 md:gap-4">
                      <div>
                        <p className="font-semibold">Full Name</p>
                        <p className="text-sm">Nguyễn Văn Anh</p>
                      </div>
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-sm">Số 1 Võ Văn Ngân</p>
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm">Tp. Hồ Chí Minh</p>
                      </div>
                      <div>
                        <p className="font-semibold">Phone Number</p>
                        <p className="text-sm">0898354444</p>
                      </div>
                    </div>
                    <div>
                      <button className="w-full block rounded-lg bg-gray-400 py-2">
                        Conttact Seller
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <p className="font-bold text-2xl text-[#25BEB9]">Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident doloribus vero voluptate iure libero totam officia
                reiciendis ullam culpa vel minima, maxime expedita odio nostrum
                quod aperiam? Natus nam modi cum repellendus rerum, cupiditate
                reprehenderit illo dolore sit repudiandae in corporis. Harum
                voluptas nemo nesciunt, consequatur totam sint. Non, nemo odio!
                Illum sed praesentium nulla vitae cumque aspernatur magnam
                alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, corporis necessitatibus. Saepe voluptas totam est
                natus in possimus doloribus. Ullam consequatur recusandae iste
                dolorum perspiciatis possimus doloribus error quasi quia eius.
                Sed quidem alias modi. Vitae beatae assumenda perferendis labore
                velit maiores excepturi molestiae fugit blanditiis. Blanditiis
                tenetur natus architecto quis voluptate eius ad, tempora dolorum
                nulla temporibus ipsum perferendis quas quos repellat. Maiores
                aliquam, soluta, velit laborum nisi fugiat ea quidem consectetur
                nulla accusamus fugit tempore natus quibusdam molestiae omnis
                pariatur obcaecati temporibus quam quasi laudantium?
                Necessitatibus repellat, officia omnis vitae ab suscipit placeat
                maxime eaque voluptate itaque esse cum nostrum culpa debitis qui
                vero fugiat doloribus consectetur consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailPost;
