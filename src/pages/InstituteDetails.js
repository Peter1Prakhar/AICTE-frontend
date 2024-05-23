import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const InstituteDetails = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentApplicationNumber: 0,
    applicationType: '',
    currentStatus: '',
    subStatus: '',
    academicYear: 0,
    applicationOpenedDate: '',
    applicationSubmittedDate: '',
    reopenedApplicationDate: '',
    appealRequestDate: '',
    applicationDontReceived: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
    
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">Institue Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div className='flex flex-row flex-wrap'>
        <div className="mb-4 p-6">
          <label htmlFor="currentApplicationNumber" className="block text-sm font-medium text-black">currentApplicationNumber</label>
          <input
            type="number"
            id="currentApplicationNumber"
            name="currentApplicationNumber"
            value={formData.currentApplicationNumber}
            onChange={handleChange}
            className="mt-1 p-2 border  border-blue-600 rounded "

          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="applicationType" className="block text-sm font-medium text-black">applicationType</label>
          <input
            type="number"
            id="applicationType"
            name="applicationType"
            value={formData.applicationType}
            onChange={handleChange}
            className="mt-1 p-2 border  border-blue-600 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="currentStatus" className="block text-sm font-medium text-black">currentStatus</label>
          <input
            type="number"
            id="currentStatus"
            name="currentStatus"
            value={formData.currentStatus}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-600 rounded"
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="subStatus" className="block text-sm font-medium text-black">subStatus</label>
          <input
            type="number"
            id="subStatus"
            name="subStatus"
            value={formData.subStatus}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-600 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="academicYear" className="block text-sm font-medium text-black">academicYear</label>
          <input
            type="date"
            id="academicYear"
            name="academicYear"
            value={formData.academicYear}
            onChange={handleChange}
            className="mt-1 p-2 border  border-blue-600 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="applicationOpenedDate" className="block text-sm font-medium text-black">applicationOpenedDate</label>
          <input
            type="date"
            id="applicationOpenedDate"
            name="applicationOpenedDate"
            value={formData.applicationOpenedDate}
            onChange={handleChange}
            className="mt-1 p-2 border  border-blue-600 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="applicationSubmittedDate" className="block text-sm font-medium text-black">applicationSubmittedDate</label>
          <input
            type="date"
            id="applicationSubmittedDate"
            name="applicationSubmittedDate"
            value={formData.applicationSubmittedDate}
            onChange={handleChange}
            className="mt-1 p-2 border  border-blue-600 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="reopenedApplicationDate" className="block text-sm font-medium text-black">reopenedApplicationDate</label>
          <input
            type="date"
            id="reopenedApplicationDate"
            name="reopenedApplicationDate"
            value={formData.reopenedApplicationDate}
            onChange={handleChange}
            className="mt-1 p-2 border  border-blue-600 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="appealRequestDate" className="block text-sm font-medium text-black">appealRequestDate</label>
          <input
            type="date"
            id="appealRequestDate"
            name="appealRequestDate"
            value={formData.appealRequestDate}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-600 rounded "
          />
        </div>
        <div className="mb-4 p-6">
          <label htmlFor="applicationDontReceived" className="block text-sm font-medium text-black">applicationDontReceived</label>
          <input
            type="number"
            id="applicationDontReceived"
            name="applicationDontReceived"
            value={formData.applicationDontReceived}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-600 rounded "
          />
        </div>
        </div>

        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstituteDetails;
