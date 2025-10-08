
import React, { useState } from "react";
import { useParams } from "react-router";
import UseApps from "../Hooks/UseApps";
import { toast } from "react-toastify";
import ErrorPage from "./ErrorPage";

const AppDetails = () => {
    let [active,setActive]=useState(false)
   
  const { id } = useParams();
  const { apps, loading, error } = UseApps();

  if (loading)
    return <span className="loading loading-dots loading-xl"></span>;
  if (error) return <p className="text-red-500">{error}</p>;

  const app = apps.find((p) => String(p.id) === id);
  if (!app) return <ErrorPage/>;

  const { image, title, companyName, downloads, ratingAvg, reviews, size } =
    app;

    let handleInstall=()=>{
        console.log('vvf')
toast(`${title} Installed Seccesful`)
setActive(true)
    }
      const buttonText = active ? "Installed" : `Install Now (${size}MB)`;

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mt-10">

      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img
          src={image}
          alt={title}
          className="h-55 w-55 object-contain"
        />
      </div>


      <div className="flex-1 md:ml-8">
       
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-indigo-500 hover:underline cursor-pointer">
              {companyName}
            </span>
          </p>
        </div>

       <hr />
        <div className="flex flex-wrap justify-between text-center mt-6 gap-4">
          <div className="flex flex-col items-center">
            <p className="text-green-600 text-xl font-bold flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              {downloads}
            </p>
            <p className="text-gray-500 text-sm">Downloads</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-orange-500 text-xl font-bold flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-orange-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431L24 9.753l-6 5.851L19.335 24 12 20.202 4.665 24 6 15.604 0 9.753l8.332-1.735z" />
              </svg>
              {ratingAvg}
            </p>
            <p className="text-gray-500 text-sm">Average Ratings</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-indigo-500 text-xl font-bold flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {reviews}K
            </p>
            <p className="text-gray-500 text-sm">Total Reviews</p>
          </div>
        </div>

  
        <div className="mt-8">
          <button disabled={active} onClick={handleInstall} className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
           {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
