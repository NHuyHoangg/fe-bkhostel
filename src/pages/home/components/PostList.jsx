import RentalPost from "./RentalPost"

const PostList = ({postsInfo, totalPost}) => {
  return (
    <div className="flex flex-col gap-4 px-3 py-3 border border-gray-300 rounded-md ">
      <p className="font-semibold text-lg mb-2">
        Tổng {totalPost} kết quả
      </p>
      <div className="flex items-center">
        <p className="text-base font-semibold mr-5">
          Sắp xếp
        </p>
        <button className="bg-gray-300 rounded-md px-2 py-1 font-semibold mr-2">Mặc định</button>
        <button className="bg-gray-300 rounded-md px-2 py-1 font-semibold">Mới nhất</button>
      </div>
      {postsInfo.map((post, i) => {
        return (
          <RentalPost 
            key={i}
            {...post}
          />
        )
      })}
    </div>
  )
}

export default PostList
