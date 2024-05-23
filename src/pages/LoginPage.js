import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 ">
      <div className="flex flex-row bg-white p-8 rounded shadow-md w-7/12">
      <div className='bg-white flex-grow'>
      <img src='loginpage_img.jpg' className=' h-full object-cover'/>
      </div>
      <div className="bg-blue-500 p-8 rounded shadow-md w-80">
        <h2 className="text-2xl text-white font-bold mb-4">Login Page</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-sm font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-white hover:bg-blue-600 text-blue-500 hover:text-white font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            Login
          </button>
          <h3 className='text-white p-3'>Forgot Password</h3>
        </form>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
