import { Link } from "react-router-dom";
import logo from "/favicon.avif";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1 logo-hover w-fit">
      <img className="w-8 lg:w-10" src={logo} alt="logo" />
      <div className="flex flex-col">
        <p className="text-sm sm:text-xl font-bold leading-6">EliteGaming</p>
        <p className="text-xs sm:text-sm font-semibold tracking-widest ml-px">
          Emporium
        </p>
      </div>
    </Link>
  );
};

export default Logo;
