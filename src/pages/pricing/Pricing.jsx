/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/display-name
import { memo,useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import AdminPagination from "../../components/adminPagination/AdminPagination"
import PricingRow from "../../components/pricingRow/PricingRow";

const Pricing = memo(() => {
  const [page, setPage] = useState({
    current: 0,
    quantity: 3,
  });

  const [pricingItems,setPricingItems] = useState(
    [
      {
        id:1,
        name:"Ưu đãi 1",
        fit:"Text",
        dayPrice:0,
        weekPrice:0,
        monthPrice:0
      },
      {
        id:2,
        name:"Ưu đãi 1",
        fit:"Text",
        dayPrice:0,
        weekPrice:0,
        monthPrice:0
      },
      {
        id:3,
        name:"Ưu đãi 1",
        fit:"Text",
        dayPrice:0,
        weekPrice:0,
        monthPrice:0
      }
    ]
  )
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
  const handleDeletedItem = (id)=>{
    let temp = pricingItems.filter((item)=>item.id!==id);
    setPricingItems(temp);
    console.log(id);
  }

  return (
    <div className="w-full h-[100vh] bg-blue-200">
      <div className="pt-8 ml-8">
        <h2 className="font-bold text-3xl">Users List</h2>
        <div className="pr-8 mt-4">
          <div className="bg-white w-full rounded-xl py-4 px-4 relative min-h-[600px]">
            <div className="flex flex-row-reverse">
              <form className="flex items-center">
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
            <div className="mt-4 text-center">
              <div className="grid grid-cols-16 font-bold bg-[#b6d6f2] rounded-xl py-2">
                <div className="col-span-1">ID</div>
                <div className="col-span-2">Ưu đãi</div>
                <div className="col-span-1">Phù hợp</div>
                <div className="col-span-2">Giá ngày</div>
                <div className="col-span-2">Giá tuần</div>
                <div className="col-span-2">Giá tháng</div>
                <div className="col-span-3">Status</div>
                <div className="col-span-3">Action</div>
              </div>
              {
                pricingItems.map((item,index)=>{
                  return <PricingRow key={index} rowItem={item} handleDelete={handleDeletedItem}/>
                })
              }
            </div>
            <div className="my-4 absolute bottom-0 left-0 right-0">
              <span className="ml-4">Showing 1 to {pricingItems.length} of {pricingItems.length} entries</span>
              <div className="flex justify-center text-center">
                <AdminPagination handleChange={handlePageChange} pageStatus={page}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Pricing;
