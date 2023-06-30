import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { googleSignIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const saveUser = {
          name: loggedUser?.displayName,
          email: loggedUser?.email,
          role: "user",
        };
        axiosSecure
          .post(`${import.meta.env.VITE_apiUrl}/users`, saveUser)
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="form-control">
        <fieldset className="border-t-2 border-gray-400 mt-2 mb-4">
          <legend className="mx-auto px-4 text-gray-400 text-xl font-semibold">
            or
          </legend>
        </fieldset>
      </div>
      <div onClick={handleGoogleLogin} className="form-control">
        <span className="flex justify-center items-center gap-1 bg-white text-black border-2 btn hover:bg-blue-500 hover:text-white hover:border-0">
          <FcGoogle className="text-2xl" /> Continue with Google
        </span>
      </div>
    </>
  );
};

export default SocialLogin;
