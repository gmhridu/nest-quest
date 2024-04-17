import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Lottie from "lottie-react"
import successfull from '../../successfully.json'

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
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const handleGoogleSignIn = () => { 
    signInWithPopup(auth, googleProvider)
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

  const handleGithubSignIn = () => {
     signInWithPopup(auth, githubProvider)
       .then((result) => {
         updateProfile(auth.currentUser, { displayName: username });
         if (result?.user) {
           const userWithUsername = { ...result?.user, username, photo };
           setUser(userWithUsername);
           navigate("/");
           toast.success("Login successfully!");
         }
       })
       .catch((error) => {
         console.error(error);
       });
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
          {/* <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-navColor font-bold">
            Register
          </button> */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn block w-full p-3 text-center rounded-sm text-gray-50 bg-navColor hover:bg-teal-600 font-bold"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Register
          </button>
          <dialog
            id="my_modal_3"
            className="modal bg-transparent min-h-screen flex items-center justify-center"
          >
            <div className="modal-box bg-white flex flex-col items-center">
              <div>
                <Lottie className=" w-56" animationData={successfull} />
              </div>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="space-y-3">
                <h3 className="font-bold text-lg">
                  Account Register Successfully!{" "}
                </h3>
                <p>Please Login now to get access...</p>
                <Link
                  to={'/login'}
                  className="btn  btn-primary w-full text-gray-50 bg-navColor hover:bg-teal-700 font-medium text-lg rounded-2xl">
                  Login Now
                </Link>
              </div>
            </div>
          </dialog>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Register with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            onClick={handleGoogleSignIn}
            aria-label="Register in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </Link>
          <Link
            onClick={handleGithubSignIn}
            aria-label="Register in with GitHub"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </Link>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-gray-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
