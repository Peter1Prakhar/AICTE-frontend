// HostelFacilitiesForm.js

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const HostelFacilitiesForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    whetherTheHostelFacilitiyIsAvailable: false,
    girlsHostel: false,
    numberOfRooms: 0,
    hostelCapacity: 0,
    boysHostel: false,
    numberOfRoomsForBoys: 0,
    totalCapacity: 0,
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
    // Add your logic for form submission or API call here
    console.log('Form submitted:', formData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">Hostel Amenities</h2>
      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
      <div className='flex flex-row flex-wrap'>
        <div className="mb-4 p-6">
          <label htmlFor="whetherTheHostelFacilitiyIsAvailable" className="block text-sm font-medium text-black">
            Hostel Facility Availability
          </label>
          <input
            type="checkbox"
            id="whetherTheHostelFacilitiyIsAvailable"
            name="whetherTheHostelFacilitiyIsAvailable"
            checked={formData.whetherTheHostelFacilitiyIsAvailable}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="girlsHostel" className="block text-sm font-medium text-black">
            Girls Hostel
          </label>
          <input
            type="checkbox"
            id="girlsHostel"
            name="girlsHostel"
            checked={formData.girlsHostel}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="numberOfRooms" className="block text-sm font-medium text-black">
            Number of Rooms
          </label>
          <input
            type="number"
            id="numberOfRooms"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="hostelCapacity" className="block text-sm font-medium text-black">
            Hostel Capacity
          </label>
          <input
            type="number"
            id="hostelCapacity"
            name="hostelCapacity"
            value={formData.hostelCapacity}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="boysHostel" className="block text-sm font-medium text-black">
            Boys Hostel
          </label>
          <input
            type="checkbox"
            id="boysHostel"
            name="boysHostel"
            checked={formData.boysHostel}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="numberOfRoomsForBoys" className="block text-sm font-medium text-black">
            Number of Rooms for Boys
          </label>
          <input
            type="number"
            id="numberOfRoomsForBoys"
            name="numberOfRoomsForBoys"
            value={formData.numberOfRoomsForBoys}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="totalCapacity" className="block text-sm font-medium text-black">
            Total Capacity
          </label>
          <input
            type="number"
            id="totalCapacity"
            name="totalCapacity"
            value={formData.totalCapacity}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostelFacilitiesForm;
