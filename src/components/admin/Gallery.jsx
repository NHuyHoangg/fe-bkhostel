import Carousel from "better-react-carousel";
import { useMediaQuery } from 'react-responsive';

const Gallery = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const carouselProps = isTablet
    ? { cols: 3, rows: 1, gap: 8, loop: true }
    : { cols: 4, rows: 1, gap: 20, loop: true };
  const slides = [
    {
      url: "https://plus.unsplash.com/premium_photo-1683910665313-877b5dd42d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "beach",
    },
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "boat",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1676321688594-7c2e60a70de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "forest",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1664193968881-e3a50535c08c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWV8ZW58MHx8MHx8fDA%3D",
      title: "city",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1678375722686-c7ea507c3003?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWV8ZW58MHx8MHx8fDA%3D",
      title: "italy",
    },
  ];
  return (
    <Carousel {...carouselProps} loop>
      {slides.map((item, idx) => {
        return (
          <Carousel.Item key={idx}>
            <img
              className="h-28 w-full rounded-md"
              src={item.url}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default Gallery;
