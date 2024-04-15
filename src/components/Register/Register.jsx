import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { setUser, createUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    if (data) {
      const { email, password } = data;
      try {
        const result = await createUser(email, password);
        if (result?.user) {
          navigate("/login");
          toast.success(
            `Your account has been created successfully! Please login now`
          );
          setUser(result.user);
        }
      } catch (error) {
        console.error(error);
        toast.error(`Something went wrong. Please try again later.`);
      }
    }
  };

  return (
    <div className="min-h-[640px] flex items-center justify-center my-6">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              {...register("username", {
                required: {
                  value: true,
                  message: "You must have to fill this input!!",
                },
                maxLength: {
                  value: 20,
                  message: "Your username is too long!",
                },
              })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
            <div>
              {errors.username && (
                <p className="text-red-500">{errors?.username?.message}</p>
              )}
              {errors.username && errors.username.type === "maxLength" && (
                <p className="text-red-500">{errors?.username?.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "You must have to fill this input!!",
                },
              })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
            <div>
              {errors.email && (
                <p className="text-red-500">{errors?.email?.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block text-gray-600">
              Photo URL
            </label>
            <input
              {...register("photo")}
              type="text"
              name="photo"
              id="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "You must have to fill this input!!",
                },
                maxLength: {
                  value: 30,
                  message: "Your password is too long!",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
            <span>
              {errors.password && (
                <p className="text-red-500">{errors?.password?.message}</p>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <p className="text-red-500">{errors?.password?.message}</p>
              )}
            </span>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="comfirm_password" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              {...register("comfirm_password", {
                required: {
                  value: true,
                  message: "You must have to fill this input!!",
                },
                maxLength: {
                  value: 30,
                  message: "Your password is too long!",
                },
              })}
              type="password"
              name="comfirm_password"
              id="comfirm_password"
              placeholder="Comfirm Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
            <div>
              {errors.comfirm_password && (
                <p className="text-red-500">
                  {errors?.comfirm_password?.message}
                </p>
              )}
              {errors.comfirm_password &&
                errors.comfirm_password.type === "maxLength" && (
                  <p className="text-red-500">
                    {errors?.comfirm_password?.message}
                  </p>
                )}
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-navColor font-bold">
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Register with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              {/* Google icon */}
            </svg>
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              {/* Twitter icon */}
            </svg>
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              {/* GitHub icon */}
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-gray-800">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
