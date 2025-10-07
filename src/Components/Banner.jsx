import React from "react";
import googleIcon from "../assets/GooglePlayStore.png";
import appleIcon from "../assets/appleStore.png";
import heroImg from '../assets/hero.png'

const Banner = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-12 bg-gray-100">
      <h1 className="text-5xl font-extrabold leading-tight mb-4">
        We Build <br />
        <span className="bg-[linear-gradient(90deg,#9F62F2_0%,#632EE3_100%)] bg-clip-text text-transparent">
          Productive
        </span>{' '}
         Apps
      </h1>

      <p className="text-gray-600 max-w-2xl mb-8">
        At <span className="font-semibold text-gray-800">HERO.IO</span>, we craft
        innovative apps designed to make everyday life simpler, smarter, and
        more exciting. Our goal is to turn your ideas into digital experiences
        that truly make an impact.
      </p>

      <div className="flex gap-4">
       
        <button className="flex items-center gap-2 bg-white text-black border px-5 py-3 rounded-2xl hover:opacity-90 transition">
          <img src={googleIcon} alt="Google Play" className="w-6 h-6" />
          <p className="font-medium">Google Play</p>
        </button>

        <button className="flex items-center gap-2 bg-white border text-black px-5 py-3 rounded-2xl hover:opacity-90 transition">
          <img src={appleIcon} alt="App Store" className="w-6 h-6" />
          <p className="font-medium">App Store</p>
        </button>
      </div>
      <div className="w-full text-center">
        <img className=" mx-auto  w-144 mt-[100px] h-auto" src={heroImg} alt="" />
      
       <div className=" bg-[linear-gradient(90deg,#9F62F2_0%,#632EE3_100%)] text-white py-16">
  <div className="max-w-6xl mx-auto text-center px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Trusted By Millions, Built For You
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
     
      <div>
        <h3 className="text-lg font-medium text-gray-200 mb-2">Total Downloads</h3>
        <p className="text-4xl font-extrabold">29.6M</p>
        <p className="text-sm text-gray-300 mt-1">27% More Than Last Month</p>
      </div>

     
      <div>
        <h3 className="text-lg font-medium text-gray-200 mb-2">Total Reviews</h3>
        <p className="text-4xl font-extrabold">906K</p>
        <p className="text-sm text-gray-300 mt-1">46% More Than Last Month</p>
      </div>

    
      <div>
        <h3 className="text-lg font-medium text-gray-200 mb-2">Active Apps</h3>
        <p className="text-4xl font-extrabold">132+</p>
        <p className="text-sm text-gray-300 mt-1">31 More Will Launch</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Banner;
