/* eslint-disable react/prop-types */
import { memo } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidDetail } from "react-icons/bi";

// eslint-disable-next-line react/display-name, react/prop-types
const PricingRow = memo(({ handleDelete,rowItem }) => {
  console.log(rowItem);
  return (
    <div className="grid grid-cols-16 py-2">
      <div className="col-span-1">{rowItem.id}</div>
      <div className="col-span-2">{rowItem.name}</div>
      <div className="col-span-1">{rowItem.fit}</div>
      <div className="col-span-2">{rowItem.dayPrice}</div>
      <div className="col-span-2">{rowItem.weekPrice}</div>
      <div className="col-span-2">{rowItem.monthPrice}</div>
      <div className="col-span-3">
        {" "}
        <span className="bg-[#59d9cc] text-white px-5 inline-block rounded-xl">
          Active
        </span>
      </div>
      <div className="col-span-3 flex justify-center">
        <BiSolidDetail className="mr-1 md:mr-2 lg:mr-4 w-6 h-6 cursor-pointer hover:scale-105 hover:text-[rgb(57,197,200)]" />
        <BsFillTrash3Fill onClick={()=>handleDelete(rowItem.id)} className="w-6 h-6 cursor-pointer hover:scale-105 hover:text-[rgb(57,197,200)]" />
      </div>
    </div>
  );
});

export default PricingRow;
