import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import circle1 from "../../../assets/banner/design-circle-1.webp";
import circle3 from "../../../assets/banner/design-circle-3.webp";
import { Link } from "react-router-dom";
import { BsCart4, BsController } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products/featured")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="relative bg-black">
      <img
        className="absolute top-0 right-0 lg:right-[8%] w-3/5 lg:w-4/12"
        src={circle1}
        alt="image"
      />
      <div className="container mx-auto relative py-14 md:py-20 px-4">
        <img className="absolute top-0 left-[24%]" src={circle3} alt="image" />
        <div className="md:flex justify-between items-center mb-10 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-0">
            Featured Products
          </h2>
          <Link to="/products">
            <button className="btn-secondary flex gap-2 items-center relative z-10">
              Show Products <BsController className="text-xl" />
            </button>
          </Link>
        </div>
        <Swiper
          loop
          freeMode={true}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper select-none"
        >
          {products?.map((product) => (
            <SwiperSlide
              key={product._id}
              className="bg-blue-800 bg-opacity-20 border border-x-violet-600 border-y-blue-600  rounded-bl-lg rounded-tr-lg px-4 py-5 mb-14"
            >
              <div className="flex justify-between items-center">
                <p className="bg-gradient-to-r from-blue-500 hover:from-blue-600 inline px-2 py-1 rounded-lg text-white text-sm font-semibold">
                  {product?.category}
                </p>
                {selected ? (
                  <AiFillHeart
                    onClick={() => setSelected(!selected)}
                    className="text-2xl text-violet-600 cursor-pointer"
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => setSelected(!selected)}
                    className="text-2xl text-violet-600 cursor-pointer"
                  />
                )}
              </div>
              <div>
                <h1 className="mt-8 text-xl font-bold text-gray-300">
                  {product?.product_name?.length > 25
                    ? `${product?.product_name?.slice(0, 25)}...`
                    : product?.product_name}
                </h1>
                <img
                  className="mx-auto py-20 w-3/4"
                  src={product?.product_image}
                  alt="product"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-gray-300">
                  Price: ${product?.price}
                </p>
                <button className="btn-primary flex gap-2 items-center relative z-10">
                  Add to Cart <BsCart4 className="text-xl" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
