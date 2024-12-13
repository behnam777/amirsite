import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-[37vh]  flex flex-col justify-between items-center py-8">
      {/* عنوان اصلی سایت کمی بالاتر */}
      <div className="flex flex-col items-center justify-end h-1/2">
        <Image
          src="/logo.svg"
          alt="Website Logo"
          width={176}
          height={83}
          className="mb-4 max-w-[176px] w-full"
          priority // اگر می‌خواهید این تصویر در اولویت بارگذاری باشد
        />
      </div>

      {/* شعارها */}
      <div className="flex flex-col items-center w-full ">
        <div className=" text-l mt-[-2%]">the worlds most visited architecture platform</div>{" "} 
      </div>

      {/* منو */}
      <div className="flex space-x-5 text-base uppercase ">
        <a href="#home" className="hover:text-blue-500">
          Home
        </a>
        <span className="h-4 mx-2 mt-1 border-r border-gray-400"></span>
        <a href="#about" className="hover:text-blue-500">
          About
        </a>
        <span className="h-4 mx-2 mt-1 border-r border-gray-400 "></span>
        <a href="#services" className="hover:text-blue-500">
          Services
        </a>
        <span className="h-4 mx-2 mt-1 border-r border-gray-400 "></span>
        <a href="#contact" className="hover:text-blue-500">
          Contact
        </a>
        <span className="h-4 mx-2 mt-1 border-r border-gray-400 "></span>
        <a href="#blog" className="hover:text-blue-500">
          Blog
        </a>
         
      </div>
    </div>
  );
}
