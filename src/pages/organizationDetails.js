import React, { useState } from 'react';
import { statesData } from '../lib/states-districts';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const OrganisationDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    nameOfInstitute: '',
    typeOfInstitute: '',
    registeredWith: '',
    registrationDate: '',
    organisationAddress: '',
    pin: '',
    PAN: '',
    state: '',
    district: '',
    town: '',
    organisationWebsite: '',
    STDcode: '',
    landlineNumber: '',
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">Organization Details Form</h2>
    <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
      {/* Name of Institute */}
      <div className='flex flex-row flex-wrap'> 
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Name of Institute:</label>
        <input
          type="text"
          name="nameOfInstitute"
          value={formData.nameOfInstitute}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
          required
        />
      </div>

      {/* Type of Institute (dropdown) */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Type of Institute:</label>
        {/* Replace 'options' with your actual dropdown options */}
        <select
          name="typeOfInstitute"
          value={formData.typeOfInstitute}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
          required
        >
          <option value="">Select Type</option>
          <option value="Type1">Type 1</option>
          <option value="Type2">Type 2</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Registered With */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Registered With:</label>
        <input
          type="text"
          name="registeredWith"
          value={formData.registeredWith}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
          required
        />
      </div>

      {/* Registration Date (calendar) */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Registration Date:</label>
        <input
          type="date"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
          required
        />
      </div>

      {/* Organisation Address */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Organisation Address:</label>
        <textarea
          name="organisationAddress"
          value={formData.organisationAddress}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
          required
        ></textarea>
      </div>

      {/* PIN (6 digits only) */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">PIN:</label>
        <input
          type="text"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
          pattern="[0-9]{6}"
          title="Please enter 6 digits"
          className="mt-1 p-2 border border-blue-500 rounded "
          required
        />
      </div>

      {/* PAN (Alphanumeric) */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">PAN:</label>
        <input
          type="text"
          name="PAN"
          value={formData.PAN}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
          required
        />
      </div>

      {/* State */}
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

      {/* Town */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Town:</label>
        <input
          type="text"
          name="town"
          value={formData.town}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
          required
        />
      </div>

      {/* Organisation Website */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Organisation Website:</label>
        <input
          type="url"
          name="organisationWebsite"
          value={formData.organisationWebsite}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
        />
      </div>

      {/* STD Code (6 digits max) */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">STD Code:</label>
        <input
          type="text"
          name="STDcode"
          value={formData.STDcode}
          onChange={handleChange}
          pattern="[0-9]{1,6}"
          title="Please enter 6 digits or less"
          className="mt-1 p-2 border border-blue-500 rounded "
        />
      </div>

      {/* Landline Number (5-10 digits) */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Landline Number:</label>
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
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
    </div>
  );
};

export default OrganisationDetailsForm;
