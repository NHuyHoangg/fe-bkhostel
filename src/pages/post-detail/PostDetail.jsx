import RentalDetail from './components/RentalDetail'
import OwnerDetail from './components/OwnerDetail'

const PostDetail = () => {
    const rentalDetail = {
        imageUrl: "https://timescityminhkhai.com/wp-content/uploads/sites/4/2020/10/phong-tro-cho-thue.jpg",
        title: "Phòng trọ giá tốt tại Q.5",
        postDate: "Hôm nay",
        price: 1.5,
        area: 22,
        addressDetail: "120 Nguyễn Lương Bằng, Phường Phú Mỹ, Quận 7, Hồ Chí Minh",
        descriptionDetail: `Lorem ipsum dolor sit amet consectetur. Aliquam vitae morbi justo phasellus mauris. In sed et at tincidunt vel quisque. 
                    Mattis praesent viverra eget id nec sodales. Leo vel pretium urna cursus maecenas dui venenatis non. Sed bibendum adipiscing 
                    ipsum ornare justo nulla. Amet adipiscing odio ac pulvinar eget tempus morbi feugiat. Volutpat ultrices vitae sit arcu imperdiet 
                    posuere. Fermentum cras imperdiet ultricies magna cursus tortor sit sed feugiat. Accumsan eu sagittis tristique ultrices massa.`
        ,
        location: {
            lat: 10.734363531931315,
            lng: 106.72015766304695
        },
        owner: {
            fullName: "Lê Quân Nuôi",
            phoneNumber: "0815777735"
        }
    }
    return (
        <div className='grid grid-cols-[1.6fr_1fr] mx-auto w-full content-center max-w-[1200px]'>
            <RentalDetail {...rentalDetail} />
            <OwnerDetail owner={rentalDetail.owner} />
        </div>
    )
}

export default PostDetail;