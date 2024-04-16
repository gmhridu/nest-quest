import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, createUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data) {
      const { username, email, password, photo } = data;
      try {
        const result = await createUser(email, password);

        await updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photo
        });

        if (result?.user) {
          const userWithUsername = { ...result?.user, username, photo };
          setUser(userWithUsername);

          navigate("/login");

          toast.success(
            `Your account has been created successfully! Please login now`
          );
        }
      } catch (error) {
        console.error(error);
        toast.error(`Something went wrong. Please try again later.`);
      }
    }
  };


  // google signIn
  const provider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => { 
    signInWithPopup(auth, provider)
      .then((result) => {
       updateProfile(auth.currentUser, { displayName: username });
        if (result?.user) {
          const userWithUsername = { ...result?.user, username, photo };
          setUser(userWithUsername);
         navigate("/")
         toast.success("Login successfully!")
       }
      })
      .catch((error) => {
       console.error(error)
    })
  }

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
            <div className="flex relative">
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
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
              <button
                className="absolute right-3 top-3 text-xl"
                type="button"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            </div>
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
            <label htmlFor="confirm_password" className="block text-gray-600">
              Confirm Password
            </label>
            <div className="flex relative">
              <input
                {...register("confirm_password", {
                  required: {
                    value: true,
                    message: "You must have to fill this input!!",
                  },
                  maxLength: {
                    value: 30,
                    message: "Your password is too long!",
                  },
                })}
                type={showPassword ? "text" : "password"}
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />

              <button
                className="absolute right-3 top-3 text-xl"
                type="button"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            </div>
            <span>
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
            </span>
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
        <div className="flex flex-col gap-4 justify-center cursor-pointer ">
          <Link
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center bg-white border px-4 rounded-xl"
          >
            <button className="p-3 rounded-sm">
              <FcGoogle />
            </button>
            Register With Google
          </Link>
          <div className="flex items-center justify-center bg-white border px-4 rounded-xl">
            <Link className="p-3 rounded-sm">
              <FaGithub />
            </Link>
            Register With GitHub
          </div>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-gray-800">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
