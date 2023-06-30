import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
  h-[70vh]
  flex 
  flex-col 
  justify-center 
  items-center 
  bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent
"
    >
      <ScaleLoader size={100} color="#9c53f5" />
    </div>
  );
};

export default Loader;
