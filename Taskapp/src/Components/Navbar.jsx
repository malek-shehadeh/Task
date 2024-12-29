import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Task App</h1>
      <div className="space-x-4">
        <Link
          to="/task-manager"
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Task Manager
        </Link>
        <Link
          to="/form"
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Form
        </Link>
        <Link
          to="/appchat"
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          App-Chat
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
