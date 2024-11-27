"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    userName: "",
    groupName: "",
    email: "",
  });

  const handleSubmit = async (num) => {
    try {
      const response = await fetch("api-url", { method: "POST" });
      if (num == 1) {
        if (response) {
          alert("Group Created"); //change with redirect
          // router.push("/admin");
        }
      } else {
        // router.push("/user/1");
      }
    } catch (e) {
      alert("A problem occured");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          🎉 Manage Your Group 🎉
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter User Name"
              value={data.userName}
              onChange={(e) => setData({ ...data, userName: e.target.value })}
              className="w-full mt-2 p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Group Name
            </label>
            <input
              type="text"
              placeholder="Enter Group Name"
              value={data.groupName}
              onChange={(e) => setData({ ...data, groupName: e.target.value })}
              className="w-full mt-2 p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full mt-2 p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => handleSubmit(1)}
              className="w-full py-3 px-5 bg-purple-600 text-white rounded-md shadow-lg font-bold text-lg transform hover:scale-105 hover:bg-purple-700 transition-all duration-300"
            >
              🚀 Create Group
            </button>
            <button
              type="button"
              onClick={() => handleSubmit(2)}
              className="w-full py-3 px-5 bg-gray-600 text-white rounded-md shadow-lg font-bold text-lg transform hover:scale-105 hover:bg-gray-700 transition-all duration-300"
            >
              🔗 Join Group
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 mt-6 text-sm">
          Need help?{" "}
          <a
            href="#"
            className="text-purple-500 hover:underline hover:text-purple-700"
          >
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}
