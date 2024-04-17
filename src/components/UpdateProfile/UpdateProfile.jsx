import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { register, handleSubmit } = useForm();
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()

  const onSubmit = (data) => {
    updateUserProfile(data.username, data.photo)
      .then(() => {
        if (data.photo) {
          toast.success("Profile updated successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Failed to update profile:", error);
      });
  };

  return (
    <section className="lg:min-h-[600px] h-auto flex justify-center items-center p-6 bg-gray-100 text-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid md:grid-cols-3 grid-cols-1  gap-6 p-6 rounded-md shadow-sm bg-gray-50">
          <div
            className="space-y-2 flex flex-col items-center justify-center
          md:items-start col-span-full lg:col-span-1"
          >
            <p className="font-medium text-left">Profile</p>
            <p className="text-xs text-left">Update Your Profile!</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                {...register("photo")}
                type="text"
                name="photo"
                id="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          className="block btn btn-primary w-full p-3 text-center rounded-lg text-gray-50 bg-navColor 
          hover:bg-teal-700 font-bold"
        >
          Update Profile
        </button>
      </form>
    </section>
  );
};

export default UpdateProfile;
