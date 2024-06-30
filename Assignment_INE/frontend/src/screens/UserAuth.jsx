import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserAuth = () => {
    //SignUp or Login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmitSignUp = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', { username, password });
            console.log(username, password);
            alert('Signup successful!');
            navigate('./reload');
        } catch (error) {
            alert('Signup failed');
        }
    };
    const handleSubmitLogIn = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            navigate('./user',{state: {username}});
        } catch (error) {
            alert('Login failed');
        }
    };

    return (<>
    <form className="w-full max-w-sm pt-5">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-white text-lg  font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        User ID
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" placeholder="Enter Name" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-white text-lg  font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-password" type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required></input>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow text-gray-900 bg-gray-800 hover:bg-gray-400 hover:text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmitSignUp}>
        {/* On click authorize then navigate to User.jsx */}
        Sign Up
      </button>

      <button className="ml-2 shadow text-gray-900 bg-gray-800 hover:bg-gray-400 hover:text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmitLogIn}>
        Log In
      </button>
    </div>
  </div>
</form>
        </>
    );
};



export default UserAuth