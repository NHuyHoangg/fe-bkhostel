import { memo } from 'react'
import PostList from './components/PostList'
import RentalFilterList from './components/RentalFilterList'
import Pagination from './components/Pagination'

const SavePost = memo((props) => {
    const postsInfo = [
      {
        imageUrl: "https://timescityminhkhai.com/wp-content/uploads/sites/4/2020/10/phong-tro-cho-thue.jpg", 
        title: "Phòng trọ giá tốt tại Q.5", 
        postDate : 5, 
        price: 1.5, 
        area: 22, 
        address: "P10-Q5", 
        description: "Lorem ipsum dolor sit amet consectetur. Cras eget faucibus vel nec dignissim tellus mi. Gravida quam viverra at ut senectus nisi donec cursus."
      },
      {
        imageUrl: "https://timescityminhkhai.com/wp-content/uploads/sites/4/2020/10/phong-tro-cho-thue.jpg", 
        title: "Phòng trọ giá tốt tại Q.5", 
        postDate : 5, 
        price: 1.5, 
        area: 22, 
        address: "P10-Q5", 
        description: "Lorem ipsum dolor sit amet consectetur. Cras eget faucibus vel nec dignissim tellus mi. Gravida quam viverra at ut senectus nisi donec cursus."
      },
      {
        imageUrl: "https://timescityminhkhai.com/wp-content/uploads/sites/4/2020/10/phong-tro-cho-thue.jpg", 
        title: "Phòng trọ giá tốt tại Q.5", 
        postDate : 5, 
        price: 1.5, 
        area: 22, 
        address: "P10-Q5", 
        description: "Lorem ipsum dolor sit amet consectetur. Cras eget faucibus vel nec dignissim tellus mi. Gravida quam viverra at ut senectus nisi donec cursus."
      },
    
    ] 

  
    return (
    <div className='grid grid-cols-[1.6fr_1fr] mx-auto w-full content-center max-w-[1200px]'>
      <PostList postsInfo={[]}/> 
      <RentalFilterList />
      <Pagination />
    </div>
    );
  });

export default SavePost
