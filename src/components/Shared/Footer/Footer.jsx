import { FaPaperPlane } from "react-icons/fa";
import Logo from "../Navbar/Logo";
import { Link, useLocation } from "react-router-dom";
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";
import circle2 from "../../../assets/banner/design-circle-2.avif";
import circle3 from "../../../assets/banner/design-circle-3.webp";

const Footer = () => {
  const location = useLocation();
  const isLoginRegister =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <footer
      className={`bg-black mt-20 ${
        isLoginRegister && "mt-0"
      } pt-20 pb-10 px-4 relative`}
    >
      {isLoginRegister ? (
        <img className="absolute -top-40 right-0" src={circle3} alt="image" />
      ) : (
        <img
          className="absolute top-0 right-0 w-2/5 lg:w-1/5"
          src={circle2}
          alt="image"
        />
      )}
      <img
        className="absolute bottom-0 left-0 rotate-180 w-2/5 lg:w-1/5"
        src={circle2}
        alt="image"
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 text-gray-400 z-20 relative">
        <div>
          <Logo></Logo>
          <h2 className="text-2xl font-bold mt-6 mb-3 text-white">
            Reach out & let your mind
            <br /> <span className="title-text">explore</span>
          </h2>
          <p className="mb-4">
            Unleash your skills, conquer challenges, and embrace thrilling
            adventures. Join us at EliteGaming Emporium, where gaming dreams
            come true.
          </p>
        </div>
        <div className="flex justify-between md:justify-around">
          <div>
            <h3 className="text-xl font-bold mb-5 title-text">Helpful Links</h3>
            <p className="mb-4">
              <Link to="#">Browse Products</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Shipping & Delivery</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Returns & Exchanges</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Contact Us</Link>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5 title-text">Quick Links</h3>
            <p className="mb-4">
              <Link to="#">Gaming Headsets</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Controllers & Gamepads</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Gaming Keyboards</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Gaming Mice</Link>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-5 title-text">Share</h3>
          <div className="flex items-center gap-3">
            <Link to="#">
              <p className="p-2 rounded-md bg-gradient-to-tl from-white to-white hover:from-blue-600 hover:to-violet-600 text-black hover:text-white">
                <FiFacebook className="text-lg" />
              </p>
            </Link>
            <Link to="#">
              <p className="p-2 rounded-md bg-gradient-to-tl from-white to-white hover:from-blue-600 hover:to-violet-600 text-black hover:text-white">
                <FiTwitter className="text-lg" />
              </p>
            </Link>
            <Link to="#">
              <p className="p-2 rounded-md bg-gradient-to-tl from-white to-white hover:from-blue-600 hover:to-violet-600 text-black hover:text-white">
                <FiInstagram className="text-lg" />
              </p>
            </Link>
            <Link to="#">
              <p className="p-2 rounded-md bg-gradient-to-tl from-white to-white hover:from-blue-600 hover:to-violet-600 text-black hover:text-white">
                <FiMail className="text-lg" />
              </p>
            </Link>
          </div>
          <p className="my-4">
            Stay up to date with the latest news, gaming tips, and exclusive
            offers by subscribing to our newsletter.
          </p>
          <form className="flex">
            <input
              className="border-black rounded-l-xl w-full md:w-3/4 p-4 bg-white"
              type="email"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="transition duration-200 px-3 md:px-5 py-3 md:py-4 text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-r-xl"
            >
              <FaPaperPlane className="text-xl" />
            </button>
          </form>
        </div>
      </div>
      <p className="text-center pt-16 text-white">
        <small>© 2023 EliteGaming Emporium. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
