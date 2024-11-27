import React from "react";

function User() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-red-500 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          📝 User Dashboard
        </h1>

        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Group Name</h2>
          <h3 className="text-md text-gray-500">UserName</h3>
        </div>

        <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold text-gray-700">Job:</h3>
          <p className="text-md text-gray-600 mb-2">Maintainer</p>
          <h3 className="text-lg font-semibold text-gray-700">Permission:</h3>
          <p className="text-md text-gray-600">Write or Delete</p>
        </div>

        <div>
  <textarea
    className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none mb-4"
    rows="6"
    placeholder="Write your text here..."
   />
  <div className="flex space-x-4">
    <button className="w-full py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all">
      Write
    </button>
    <button className="w-full py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-all">
      Delete
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

export default User;
