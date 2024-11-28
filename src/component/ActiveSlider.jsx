import { Swiper, SwiperSlide } from 'swiper/react';  
import P1 from "../Images/P1.png";  
import P2 from "../Images/P2.png";  
import P3 from "../Images/P3.png";  
  
// Import Swiper styles  
import 'swiper/css';  
import 'swiper/css/navigation';  
import 'swiper/css/pagination';  
import 'swiper/css/scrollbar';  
  
// Import Swiper modules  
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';  
  
// Sample product data with images  
const products = [  
  { id: 1, image: P1 },  
  { id: 2, image: P2 },  
  { id: 3, image: P3 },  
  { id: 4, image: "https://via.placeholder.com/150" },  
  { id: 5, image: "https://via.placeholder.com/150" },  
];  
  
export default function ActiveSlider() {
  return (
    <div className="container mx-auto p-3 bg-gradient-to-r from-[#0023c3] to-[#05197d] hover:bg-yellow-50 rounded-3xl shadow-yellow-400">
      <div className="text-center text-2xl font-extrabold tracking-wide md:text-3xl text-yellow-400 py-3">
        "Best in market"
      </div>
      <div className="text-center text-4xl mb-5 py-2 font-extrabold tracking-wide md:text-6xl text-white">
        Our Product
      </div>

      <div className="p-5 relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="flex items-center justify-center"
            >
              <div className="bg-white hover:border-8 hover:border-yellow-300 border-spacing-3 rounded-2xl shadow-lg p-4 sm:p-6 max-w-xs w-full h-[400px] sm:h-[400px] flex flex-col transition-transform transform hover:scale-90">
                <img
                  src={product.image}
                  alt="Product Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom styles for navigation buttons */}
        <style jsx>{`
          .swiper {
            position: relative;
          }
          .swiper-button-next,
          .swiper-button-prev {
            width: 55px;
            height: 55px;
            background: linear-gradient(45deg, #ffcc00, #ff6100); /* Yellow gradient */
            border-radius: 50%;
            color: #ff;
            font-size: 18px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.4s, box-shadow 0.4s, background 0.4s;
            z-index: 10;
            border: 2px solid #ffffff;
          }
          .swiper-button-next {
            right: -1px;
          }
          .swiper-button-prev {
            left: -1px;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            transform: scale(1.2);
            box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.4);
            background: linear-gradient(45deg, #ffe680, #ff9900); /* Lighter yellow gradient on hover */
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px; /* Increase arrow size */
            font-weight: bold;
          }
        `}</style>
      </div>
    </div>
  );
}




