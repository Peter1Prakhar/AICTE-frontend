import React, { useState } from 'react';
import { statesData } from '../lib/states-districts';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';


const InstituteForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    name: '',
    yearOfEstablishment: '',
    instituteType: '',
    addressOfInstitute: '',
    state_Ut: '',
    district: '',
    town: '',
    pin: '',
    primaryEmail: '',
    percentGrantRecievedFromGovernment: '',
    forPWD: false,
    womenInstitute: false,
    LOIorLOIwithLOA: '',
    selfFinancedCourses: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.primaryEmail)) {
        alert('Please enter a valid email');
        return;
        }
        setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">More Institute Details Form</h2>
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

        {/* Year of Establishment */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Year of Establishment:</label>
          <input
            type="text"
            name="yearOfEstablishment"
            value={formData.yearOfEstablishment}
            onChange={handleChange}
             className="mt-1 p-2 border border-blue-500 rounded "

          />
        </div>

        {/* Institute Type */}
        <div  className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Institute Type:</label>
          <select
            type="text"
            name="instituteType"
            value={formData.instituteType}
            onChange={handleChange}
             className="mt-1 p-2 border border-blue-500 rounded "

          >
            <option value="">Select Institute Type</option>
            {/* Add options based on your institute types */}
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state_Ut"
            value={formData.state_Ut}
            onChange={handleChange}
            className="w-full p-2 border border-blue-500 rounded"
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
          <label htmlFor="district">District</label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-2 border border-blue-500 rounded"
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
          <label className="block text-sm font-medium text-black">Town</label>
          <input
            type="text"
            name="town"
            value={formData.town}
            onChange={handleChange}
             className="mt-1 p-2 border border-blue-500 rounded "

          />
        </div>

        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Pin Code</label>
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
             className="mt-1 p-2 border border-blue-500 rounded "

          />
        </div>

        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Primary Email</label>
          <input
            type="text"
            name="primaryEmail"
            value={formData.primaryEmail}
            onChange={handleChange}
             className="mt-1 p-2 border border-blue-500 rounded "

          />
        </div>

        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Percent Of Grant Recieved From Government</label>
          <input
            type="text"
            name="percentGrantRecievedFromGovernment"
            value={formData.percentGrantRecievedFromGovernment}
            onChange={handleChange}
             className="mt-1 p-2 border border-blue-500 rounded "

          />
        </div>

        <div className="mb-4 p-6">
  <label className="block text-sm font-medium text-black">
    For Persons with Disabilities (PWD):
  </label>
  <input
    type="checkbox"
    name="forPWD"
    checked={formData.forPWD}
    onChange={handleChange}
    className="mr-2"
  />
  <span>Yes, the institute is for PWD</span>
</div>

{/* Women Institute */}
<div className="mb-4 p-6">
  <label className="block text-sm font-medium text-black">Women Institute:</label>
  <input
    type="checkbox"
    name="womenInstitute"
    checked={formData.womenInstitute}
    onChange={handleChange}
    className="mr-2"
  />
  <span>Yes, the institute is for women</span>
</div>

{/* LOI or LOI with LOA */}
<div className="mb-4 p-6">
  <label className="block text-sm font-medium text-black">
    Letter of Intent (LOI) or LOI with Letter of Approval (LOA):
  </label>
  <input
    type="text"
    name="LOIorLOIwithLOA"
    value={formData.LOIorLOIwithLOA}
    onChange={handleChange}
     className="mt-1 p-2 border border-blue-500 rounded "

  />
</div>

{/* Self Financed Courses */}
<div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
  <label className="block text-sm font-medium text-black">Self Financed Courses:</label>
  <input
    type="checkbox"
    name="selfFinancedCourses"
    checked={formData.selfFinancedCourses}
    onChange={handleChange}
    className="mr-2"
  />
  <span>Yes, the institute offers self-financed courses</span>
</div>
</div>


        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InstituteForm;
