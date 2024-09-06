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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`flex flex-col h-screen bg-white text-black px-4 py-4 border-r-2 sticky top-0 transition-all duration-300 ${
        isCollapsed ? 'w-[80px]' : 'w-[300px] lg:w-[350px]'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="mb-4 p-1 text-black border border-gray-300 rounded-md hover:bg-gray-200 transition duration-200"
      >
        {isCollapsed ? 'Show' : 'Hide'}
      </button>

      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer mb-8 justify-center">
        <img src={layout} alt="Dashboard logo" className="w-10 h-10" />
        {!isCollapsed && <p className="text-xl font-bold">Dashboard</p>}
      </div>

      {/* Dashboard */}
      <div className="flex items-center gap-2 bg-zinc-200 hover:bg-zinc-300 transition-all duration-300 p-2 rounded-md mb-4 cursor-pointer">
        <MdOutlineScreenshotMonitor className="w-5 h-5" />
        {!isCollapsed && <p className="text-sm font-semibold">Dashboard</p>}
      </div>

      {/* Apps */}
      <div className="mb-2">
        <p className={`text-zinc-500 mb-2 font-semibold text-sm ${isCollapsed ? 'hidden' : ''}`}>
          Apps
        </p>
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={toggleDropdown}
        >
          <BsBoxSeam className="w-5 h-5" />
          {!isCollapsed && <span>Ecommerce</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {isDropdownOpen ? (
                <IoIosArrowUp size={15} />
              ) : (
                <IoIosArrowDown size={15} />
              )}
            </div>
          )}
        </div>
        <ul
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            isDropdownOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          {['Orders', 'Order Details', 'Products', 'Sellers', 'Customers', 'Shops'].map(
            (item) => (
              <li key={item}>
                <a className={`text-sm flex justify-between py-1 cursor-pointer hover:text-blue-500 transition ${isCollapsed ? 'hidden' : ''}`}>
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* File Manager */}
      <div className="flex gap-2 items-center text-sm cursor-pointer mb-2 hover:text-blue-500 transition">
        <IoFileTrayOutline className="w-5 h-5" />
        {!isCollapsed && <p>File Manager</p>}
      </div>

      {/* Chat */}
      <div className="flex gap-2 items-center text-sm cursor-pointer mb-2 hover:text-blue-500 transition">
        <IoChatboxOutline className="w-5 h-5" />
        {!isCollapsed && <p>Chat</p>}
      </div>

      {/* Pages */}
      <div className="mt-4">
        <p className={`text-zinc-500 mb-2 font-semibold text-sm ${isCollapsed ? 'hidden' : ''}`}>
          Pages
        </p>
        <div className="flex gap-2 items-center text-sm cursor-pointer mb-2 hover:text-blue-500 transition">
          <RiFilePaper2Line className="w-5 h-5" />
          {!isCollapsed && <p>Landing</p>}
        </div>
      </div>

      {/* UI Showcase */}
      <div className="mt-4">
        <p className={`text-zinc-500 mb-2 font-semibold text-sm ${isCollapsed ? 'hidden' : ''}`}>
          UI Showcase
        </p>
        <div className="flex gap-2 items-center text-sm cursor-pointer mb-2 hover:text-blue-500 transition">
          <FiBox className="w-5 h-5" />
          {!isCollapsed && <p>Components</p>}
        </div>
        <div className="flex gap-2 items-center text-sm cursor-pointer mb-2 hover:text-blue-500 transition">
          <FaWpforms className="w-5 h-5" />
          {!isCollapsed && <p>Forms</p>}
        </div>
      </div>

      {/* Others */}
      <div className="mt-4">
        <p className={`text-zinc-500 mb-2 font-semibold text-sm ${isCollapsed ? 'hidden' : ''}`}>
          Others
        </p>
        <div className="flex gap-2 items-center text-sm cursor-pointer mb-3 hover:text-blue-500 transition">
          <IoDocumentTextOutline className="w-5 h-5" />
          {!isCollapsed && <p>Documentation</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
