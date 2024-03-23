import React , {useEffect} from "react";
import { useForm } from "react-hook-form";
import VideoBackground from "../home/VideoBackground";
import logo from "../../assets/images/logo-black.png";
import { useRegisterMutation } from "../../store/api/authQuery";
import { setCredentials } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
const Registerform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [registerMutation, { isLoading, isError, error }] =
    useRegisterMutation();

    useEffect(() => {
      if (isError) {
        toast.error(error.data.error);
      }
    }, [isError]);

  const handleRegister = async (data) => {
    try {
      const response = await registerMutation(data); // Appelez la mutation avec les données du formulaire
      console.log("Register form submitted", response.data.newUser); // Affichez la réponse de l'API
      if (response.data.newUser) {

        dispatch(setCredentials(response.data.newUser));

        navigate("/");
      }
    } catch (error) {
      console.error("Failed to register", error); // Gérez les erreurs
    }
  };

  return (
    <>
      {/* <VideoBackground /> */}
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <VideoBackground />
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <div className="flex justify-center  h-20  ">
              <img src={logo} alt="logo" className="w-40 h-40" />
            </div>
            <form className="mt-10" onSubmit={handleSubmit(handleRegister)}>
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Username"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  {...register("username", {
                    required: "UserName is required",
                  })}
                />
                {errors.userName && (
                  <div className="text-red-500">{errors.userName.message}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="tel"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  {...register("phone", {
                    required: "Tel is required",
                    maxLength: 25,
                    // pattern: /^[0-9\b]+$/,
                    message: "Invalid phone number",
                  })}
                />
                {errors.tel && (
                  <div className="text-red-500">{errors.tel.message}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  {...register("confirm_password", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === watch("password") ||
                      "The passwords do not match",
                  })}
                />
                {errors.confirm_password && (
                  <div className="text-red-500">
                    {errors.confirm_password.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Register
              </button>
            </form>
            <hr className="my-4 border-gray-300 w-full" />
            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google Logo"
                />
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>
            <p className="my-4">
              Need an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registerform;
