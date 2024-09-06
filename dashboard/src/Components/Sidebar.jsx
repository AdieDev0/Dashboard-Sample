import React, { useState } from "react";
import layout from "./Assets/layout.png";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  IoFileTrayOutline,
  IoChatboxOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { RiFilePaper2Line } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col h-screen w-60 bg-white text-black px-4 py-4 border-r-2 sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer mb-8 justify-center">
        <img src={layout} alt="Dashboard logo" className="w-10 h-10" />
        <p className="text-xl">Dashboard</p>
      </div>
      {/* Dashboard */}
      <div className="flex items-center gap-2 bg-zinc-200 hover:bg-zinc-400 duration-300 p-2 rounded-md mb-2 cursor-pointer">
        <MdOutlineScreenshotMonitor className="w-4 h-4" />
        <p className="text-xs">Dashboard</p>
      </div>
      {/* Apps Daisy */}
      <div>
        <p className="text-zinc-500 mb-2 font-semibold text-xs">Apps</p>
      </div>
      {/* inside the Apps */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-xs"
          onClick={toggleDropdown}
        >
          <BsBoxSeam />
          <span>Ecommerce</span>

          <div className="ml-auto">
            {isDropdownOpen ? (
              <IoIosArrowUp size={15} />
            ) : (
              <IoIosArrowDown size={15} />
            )}
          </div>
        </div>
        {isDropdownOpen && (
          <ul className="pl-6 mt-1 space-y-1">
            <li>
              <a className="text-xs flex justify-between p-1 cursor-pointer">
                Orders
              </a>
            </li>
            <li>
              <a className="text-xs flex justify-between p-1 cursor-pointer">
                Order Details
              </a>
            </li>
            <li>
              <a className="text-xs flex justify-between p-1 cursor-pointer">
                Products
              </a>
            </li>
            <li>
              <a className="text-xs flex justify-between p-1 cursor-pointer">
                Sellers
              </a>
            </li>
            <li>
              <a className="text-xs flex justify-between p-1 cursor-pointer">
                Customers
              </a>
            </li>
            <li>
              <a className="text-xs flex justify-between p-1 cursor-pointer">
                Shops
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* File Manager */}
      <div className="flex gap-2 items-center text-xs cursor-pointer w-fit">
        <IoFileTrayOutline className="w-4 h-4" />
        <p>File Manager</p>
      </div>
      {/* Chat */}
      <div className="flex gap-2 items-center text-xs mt-1 cursor-pointer w-fit">
        <IoChatboxOutline className="w-4 h-4" />
        <p>Chat</p>
      </div>
      <div>
        <p className="text-zinc-500 my-2 font-semibold text-xs">Pages</p>
      </div>
      <div className="flex gap-2 items-center text-xs mt-1 cursor-pointer w-fit">
        <RiFilePaper2Line className="w-4 h-4" />
        <p>Landing</p>
      </div>
      {/* ui showcase */}
      <div>
        <p className="text-zinc-500 my-2 font-semibold text-xs">UI Showcase</p>
      </div>
      <div className="flex gap-2 items-center text-xs mt-1 cursor-pointer w-fit">
        <FiBox className="w-4 h-4" />
        <p>Components</p>
      </div>
      <div className="flex gap-2 items-center text-xs mt-1 cursor-pointer w-fit">
        <FaWpforms className="w-4 h-4" />
        <p>Forms</p>
      </div>
      <div>
        <p className="text-zinc-500 my-2 font-semibold text-xs">Others</p>
      </div>
      <div className="flex gap-2 items-center text-xs cursor-pointer w-fit mb-3">
        <IoDocumentTextOutline className="w-4 h-4" />
        <p>Documentation</p>
      </div>

      {/* Need Premium */}
      <div className="mt-auto text-center items-center text-xs mb-4 border p-3 bg-zinc-200 rounded-md">
        <p>Need Premium?</p>
        <p>Access all features with a single-time purchase</p>
        <button className="btn btn-outline btn-info text-xs mt-2">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
