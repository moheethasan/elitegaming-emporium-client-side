import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import client from "../../../assets/review/client.webp";
import slide1 from "../../../assets/review/slide1.webp";
import slide2 from "../../../assets/review/slide2.webp";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Reviews = () => {
  return (
    <section className="container mx-auto mt-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 md:mb-20 text-center">
        Testimonials
      </h2>
      <Swiper
        loop
        freeMode={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper select-none"
      >
        <SwiperSlide className="border border-violet-600 rounded-bl-lg rounded-tr-lg p-3 bg-gradient-to-r from-blue-200 mb-10">
          <div className="md:flex items-center">
            <img className="w-[148px] h-[156px]" src={slide1} alt="slide" />
            <div className="">
              <h3 className="text-2xl font-bold">Gamer&#39;s Journey!</h3>
              <p className="mt-2 mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium consequuntur tempora inventore perferendis beatae
              </p>
              <div className="flex items-center gap-4">
                <img src={client} alt="client" />
                <div className="flex flex-col">
                  <h5 className="font-bold leading-4">David Rodriguez</h5>
                  <p className="leading-4 text-sm font-semibold">Client</p>
                </div>
                <div className="ms-auto flex gap-px items-center">
                  <BsStarFill className="text-blue-500" />
                  <BsStarFill className="text-violet-500" />
                  <BsStarFill className="text-blue-500" />
                  <BsStarFill className="text-violet-500" />
                  <BsStarHalf className="text-blue-500" />
                  <p className="ms-2">
                    <span className="text-violet-500">4.5</span>/5.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-violet-600 rounded-bl-lg rounded-tr-lg p-3 bg-gradient-to-r from-blue-200 mb-10">
          <div className="md:flex items-center">
            <img className="w-[148px] h-[156px]" src={slide2} alt="slide" />
            <div className="">
              <h3 className="text-2xl font-bold">One Level Time!</h3>
              <p className="mt-2 mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium consequuntur tempora inventore perferendis beatae
              </p>
              <div className="flex items-center gap-4">
                <img src={client} alt="client" />
                <div className="flex flex-col">
                  <h5 className="font-bold leading-4">David Rodriguez</h5>
                  <p className="leading-4 text-sm font-semibold">Client</p>
                </div>
                <div className="ms-auto flex gap-px items-center">
                  <BsStarFill className="text-blue-500" />
                  <BsStarFill className="text-violet-500" />
                  <BsStarFill className="text-blue-500" />
                  <BsStarFill className="text-violet-500" />
                  <BsStarHalf className="text-blue-500" />
                  <p className="ms-2">
                    <span className="text-violet-500">4.5</span>/5.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-violet-600 rounded-bl-lg rounded-tr-lg p-3 bg-gradient-to-r from-blue-200 mb-10">
          <div className="md:flex items-center">
            <img className="w-[148px] h-[156px]" src={slide1} alt="slide" />
            <div className="">
              <h3 className="text-2xl font-bold">Gamer&#39;s Journey!</h3>
              <p className="mt-2 mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium consequuntur tempora inventore perferendis beatae
              </p>
              <div className="flex items-center gap-4">
                <img src={client} alt="client" />
                <div className="flex flex-col">
                  <h5 className="font-bold leading-4">David Rodriguez</h5>
                  <p className="leading-4 text-sm font-semibold">Client</p>
                </div>
                <div className="ms-auto flex gap-px items-center">
                  <BsStarFill className="text-blue-500" />
                  <BsStarFill className="text-violet-500" />
                  <BsStarFill className="text-blue-500" />
                  <BsStarFill className="text-violet-500" />
                  <BsStarHalf className="text-blue-500" />
                  <p className="ms-2">
                    <span className="text-violet-500">4.5</span>/5.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-violet-600 rounded-bl-lg rounded-tr-lg p-3 bg-gradient-to-r from-blue-200 mb-10">
          <div className="md:flex items-center">
            <img className="w-[148px] h-[156px]" src={slide2} alt="slide" />
            <div className="">
              <h3 className="text-2xl font-bold">One Level Time!</h3>
              <p className="mt-2 mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium consequuntur tempora inventore perferendis beatae
              </p>
              <div className="flex items-center gap-4">
                <img src={client} alt="client" />
                <div className="flex flex-col">
                  <h5 className="font-bold leading-4">David Rodriguez</h5>
                  <p className="leading-4 text-sm font-semibold">Client</p>
                </div>
                <div className="ms-auto flex gap-px items-center">
                  <BsStarFill className="text-blue-500" />
                  <BsStarFill className="text-violet-500" />
                  <BsStarFill className="text-blue-500" />
                  <BsStarFill className="text-violet-500" />
                  <BsStarHalf className="text-blue-500" />
                  <p className="ms-2">
                    <span className="text-violet-500">4.5</span>/5.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;
