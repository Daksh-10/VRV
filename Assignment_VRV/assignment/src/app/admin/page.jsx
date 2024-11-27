"use client";
import React, { useState } from "react";
import Dropdown from "./components/dropdown";

function Admin() {
  const [toggler, setToggler] = useState(1);

  const [addUser, setAddUser] = useState({
    email: "",
    role: "",
    status: "",
    permission: [""],
  });

  const handleAddUser = (e, name) => {
    setAddUser({ ...addUser, [name]: e.target.value });
  };

  const handleSelect = (option) => {
    setAddUser({ ...addUser, role: option });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          👥 Admin Panel
        </h1>

        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Group Name</h2>
          <h3 className="text-md text-gray-500">UserName</h3>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setToggler(1)}
            className={`py-2 px-5 rounded-lg font-semibold text-white text-sm transition-all shadow ${toggler === 1
              ? "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              : "bg-gray-300 hover:bg-gray-400 focus:ring-2 focus:ring-gray-200"
              }`}
          >
            Add User
          </button>
          <button
            onClick={() => setToggler(2)}
            className={`py-2 px-5 rounded-lg font-semibold text-white text-sm transition-all shadow ${toggler === 2
              ? "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              : "bg-gray-300 hover:bg-gray-400 focus:ring-2 focus:ring-gray-200"
              }`}
          >
            Remove User
          </button>
          <button
            onClick={() => setToggler(3)}
            className={`py-2 px-5 rounded-lg font-semibold text-white text-sm transition-all shadow ${toggler === 3
              ? "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              : "bg-gray-300 hover:bg-gray-400 focus:ring-2 focus:ring-gray-200"
              }`}
          >
            Edit Roles
          </button>
        </div>


        {toggler === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Add User</h3>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => handleAddUser(e, "email")}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <Dropdown
              options={[
                "Maintainer",
                "Contributor",
                "Publisher",
                "Subscriber",
              ]}
              onSelect={handleSelect}
            />
            <input
              type="text"
              placeholder="Enter permission"
              onChange={(e) => handleAddUser(e, "permission")}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col items-center space-y-4">
              <button className="max-w-xs w-full py-2 px-4 text-sm bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition-all">
                Add this User
              </button>
            </div>
          </div>
        )}

        {toggler === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Remove User</h3>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col items-center space-y-4">
            <button className="max-w-xs w-full py-2 px-4 text-sm bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition-all">
                Remove this user
              </button>
            </div>

          </div>
        )}

        {toggler === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Edit Roles</h3>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => handleAddUser(e, "email")}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <Dropdown
              options={[
                "Maintainer",
                "Contributor",
                "Publisher",
                "Subscriber",
              ]}
              onSelect={handleSelect}
            />
            <input
              type="text"
              placeholder="Enter permission"
              onChange={(e) => handleAddUser(e, "permission")}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col items-center space-y-4">
              <button className="max-w-xs w-full py-2 px-4 text-sm bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all">
                Edit this user
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
