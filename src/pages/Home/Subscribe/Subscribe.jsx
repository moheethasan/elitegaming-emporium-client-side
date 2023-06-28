import subProduct from "../../../assets/subscribe/subscribe-img.webp";

const Subscribe = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 xl:gap-x-28 items-center">
        <div className="w-full mb-10 md:mb-16 lg:mb-0">
          <p className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 inline px-2 py-1 rounded-lg text-white text-sm font-semibold">
            Subscribe Us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-2 mb-6">
            Subscribe newsletter and{" "}
            <span className="title-text">get -20% off</span>
          </h2>
          <p className="text-gray-500 font-semibold">
            Almost three-quarters of dedicated PC gamers say their main
            motivation to upgrade is improving gaming experiences.
          </p>
          <div className="flex mt-8 lg:mt-12">
            <input
              className="border border-r-0 rounded-bl-3xl w-full py-3 pl-6 bg-white border-black text-sm font-semibold"
              type="email"
              placeholder="Enter email address..."
            />
            <button className="transition duration-200 px-6 md:px-8 text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-tr-3xl text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <img className="w-full" src={subProduct} alt="image" />
      </div>
    </div>
  );
};

export default Subscribe;
