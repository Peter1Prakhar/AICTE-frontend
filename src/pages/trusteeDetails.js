import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const TrusteeDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    since: '',
    till: '',
    mobileNo: 0,
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">Trustee Details</h2>

      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
      <div className='flex flex-row flex-wrap'>
        {/* Name */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
  className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Designation */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Designation:</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
  className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Since */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Since:</label>
          <input
            type="text"
            name="since"
            value={formData.since}
            onChange={handleChange}
  className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Till */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Till:</label>
          <input
            type="text"
            name="till"
            value={formData.till}
            onChange={handleChange}
  className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Mobile Number:</label>
          <input
            type="number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
  className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Email */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
  className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TrusteeDetailsForm;
