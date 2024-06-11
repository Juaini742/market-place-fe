/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import useProducts from "../../../../hooks/useProducts";
import { EffectCoverflow, Pagination } from "swiper/modules";

function RecomendProduct() {
  const products = useProducts();
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, EffectCoverflow]}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {products.slice(1, 10).map((item, i) => (
        <div
          key={i + 1}
          className="p-2 rounded-lg hover:bg-gray-200 trans-300 group relative"
        >
          <SwiperSlide className="pb-16">
            <div className="h-60 overflow-hidden flex items-center">
              <img
                src={item.img}
                alt={item.product_name}
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-between gap-1 mt-5 md:h-40">
              <h2 className="font-bold text-sm">{item.product_name}</h2>
              <span>{item.category}</span>
              <span className="text-xs">Sold {item.sold}</span>
              <span className="font-bold">{item.price}</span>
              <Link to={`/detail/${item.id}`}>
                <span className="font-bold">See Detail</span>
              </Link>
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}

export default RecomendProduct;
