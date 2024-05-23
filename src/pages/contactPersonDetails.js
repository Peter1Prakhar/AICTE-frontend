import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { statesData } from '../lib/states-districts';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const ContactPersonForm = ({contactPersonData}) => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    state: '',
    district: '',
    town: '',
    postalCode: '',
    designation: '',
    STDcode: '',
    landlineNumber: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    emailAddress: '',
    alternativeEmailAdress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isContactNumberValid = (contactNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(contactNumber);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isContactNumberValid(formData.mobileNumber)) {
      alert('Please enter a valid contact number.');
      return;
    }
    else if(!isContactNumberValid(formData.alternateMobileNumber)){
      alert('Please enter valid alternate mobile number');
      return;
    }

    else if(!isValidEmail(formData.emailAddress)){
      alert('Please enter valid email address');
      return;
    }

    else if(!isValidEmail(formData.alternativeEmailAdress)){
      alert('Please enter valid alternate email address');
    }

    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);

  };


  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">Contact Person Details</h2>

      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
        <div className='flex flex-row flex-wrap'>
        {/* Title */}
        <div className="mb-4 p-6">
        <label htmlFor="title" className="block text-sm font-medium text-black">Title</label>
          <select
            id="title"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Title</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="miss">Miss</option>
          </select> 
        </div>

        {/* First Name */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Middle Name */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Last Name */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="address" className="block text-sm font-medium text-black">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="state" className="block text-sm font-medium text-black">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select State</option>
            {statesData.states.map((stateObj) => (
              <option key={stateObj.state} value={stateObj.state}>
                {stateObj.state}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="district" className="block text-sm font-medium text-black">District</label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select District</option>
            {formData.state &&
              statesData.states
                .find((stateObj) => stateObj.state === formData.state)
                .districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
          </select>
        </div>

        <div className="mb-4 p-6">
          <label htmlFor=" town" className="block text-sm font-medium text-black">Town</label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="postalCode" className="block text-sm font-medium text-black">Pin-Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="designation" className="block text-sm font-medium text-black">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="STDcode" className="block text-sm font-medium text-black">STDcode</label>
          <input
            type="text"
            id="STDcode"
            name="STDcode"
            value={formData.STDcode}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
        <label className="block mb-1">Landline Number:</label>
        <input
          type="tel"
          name="landlineNumber"
          value={formData.landlineNumber}
          onChange={handleChange}
          pattern="[0-9]{5,10}"
          title="Please enter between 5 and 10 digits"
          className="mt-1 p-2 border border-blue-500 rounded "
        />
      </div>

        <div className="mb-4 p-6">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-black">Contact Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="alternateMobileNumber" className="block text-sm font-medium text-black">Alternate Mobile Number</label>
          <input
            type="text"
            id="alternateMobileNumber"
            name="alternateMobileNumber"
            value={formData.alternateMobileNumber}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="emailAddress" className="block text-sm font-medium text-black">Email Address</label>
          <input
            type="text"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="alternativeEmailAdress" className="block text-sm font-medium text-black">Alternate Email Address</label>
          <input
            type="text"
            id="alternativeEmailAdress"
            name="alternativeEmailAdress"
            value={formData.alternativeEmailAdress}
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

export default ContactPersonForm;