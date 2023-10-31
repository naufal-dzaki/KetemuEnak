import { useState } from "react";
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import "./index.css";

const Profilebar = () => {
  const [isVissible, setIsVissible] = useState(false);
  const menu = [
    {
      id: 1,
      name: "Edit Profile",
      icon: <UserIcon className="h-6 block mr-3" />,
    },
    {
      id: 2,
      name: "Logout",
      icon: (
        <ArrowRightOnRectangleIcon className="w-6 h-6 block mr-3 text-red-600" />
      ),
    },
  ];

  return (
    <div
      className="relative flex items-center content-center h-full cursor-pointer px-1"
      onMouseEnter={() => setIsVissible(true)}
      onMouseLeave={() => setIsVissible(false)}>
      <span className="border-2 border-solid border-gray-400 rounded-full">
        <img
          className="h-8 md:h-9 lg:h-10 w-8 md:w-9 lg:w-10 rounded-full border border-solid border-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </span>
      <div
        className={`absolute right-0 top-[60px] w-auto bg-white border border-gray-200 rounded-lg flex flex-col shadow-lg cursor-auto fade ${
          isVissible && "show"
        }`}>
        {menu.map((value) => (
          <div
            className={` flex items-center px-3 py-4 hover:bg-gray-100 cursor-pointer w-36`}
            key={value.id}>
            {value.icon}
            <p
              className={`text-sm flex-grow w-full ${
                value.id === 2 && "text-red-600"
              }`}>
              {value.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profilebar;
