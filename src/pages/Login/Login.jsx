import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animationData from "../../components/LottieFile/animation.json";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import circle1 from "../../assets/banner/design-circle-1.webp";
import circle2 from "../../assets/banner/design-circle-2.avif";
import circle3 from "../../assets/banner/design-circle-3.webp";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // email password login
  const onSubmit = (data) => {
    signIn(data?.email, data?.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.code.replace("auth/", "").split("-").join(" "));
      });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-black relative">
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
        className="absolute -bottom-40 z-10 -left-60 rotate-180"
        src={circle3}
        alt="image"
      />
      <div className="container mx-auto lg:flex justify-center items-center gap-10 pt-28 pb-28 lg:pt-52 xl:py-60">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-11/12 md:w-4/5 max-w-xl mx-auto lg:mx-0"
        />
        <div className="card w-11/12 md:w-4/5 max-w-lg mx-auto lg:mx-0 shadow-2xl bg-base-100 mt-5 lg:mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body z-20">
            <h1 className="text-4xl text-center font-bold pt-5 pb-8">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold label-text">Email Address</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email address"
                required
                className="input input-bordered border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold label-text">Password</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Enter your password"
                  required
                  className="input input-bordered border-2 w-full"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </div>
              </div>
            </div>
            <div className="form-control mt-2">
              <span className="label-text font-semibold title-text mb-3">
                {error}
              </span>
              <input
                className="btn-primary cursor-pointer"
                type="submit"
                value="Login"
              />
              <label className="label flex justify-center">
                <span className="label-text font-semibold">
                  Don&#39;t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-sm font-semibold label-text-alt link link-hover title-text"
                  >
                    Register
                  </Link>
                </span>
              </label>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
