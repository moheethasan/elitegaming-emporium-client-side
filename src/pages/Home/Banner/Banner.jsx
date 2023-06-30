import { Link } from "react-router-dom";
import circle1 from "../../../assets/banner/design-circle-1.webp";
import circle2 from "../../../assets/banner/design-circle-2.avif";
import circle3 from "../../../assets/banner/design-circle-3.webp";
import { BsController } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="relative pt-40 md:pt-60 xl:pt-72 pb-20 md:pb-28 xl:pb-36 bg-black">
      <img
        className="absolute top-0 left-0 lg:left-[8%] w-3/5 lg:w-4/12"
        src={circle1}
        alt="image"
      />
      <img
        className="absolute top-0 right-0 w-2/5 lg:w-1/5"
        src={circle2}
        alt="image"
      />
      <img
        className="absolute bottom-0 right-0 lg:right-[8%] w-3/5 lg:w-4/12 rotate-180"
        src={circle1}
        alt="image"
      />
      <img
        className="absolute -bottom-40 z-10 -left-60 rotate-180"
        src={circle3}
        alt="image"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
            Best <span className="title-text">Pro Gaming</span> Accessories
          </h2>
          <p className="text-gray-400 lg:text-lg xl:text-xl my-5">
            Gaming accessories include gear such as headsets, extra controllers,
            charging stations, memory devices, carrying cases and much more.
          </p>
          <Link to="/products">
            <button className="btn-primary flex gap-2 items-center relative z-10">
              Show Products <BsController className="text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
