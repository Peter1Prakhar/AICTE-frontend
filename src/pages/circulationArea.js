// CirculationAreaForm.js
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

import React, { useState } from 'react';

const CirculationAreaForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    areaType: '',
    averageCarpetArea: 0,
    flooring: false,
    paintingDone: '',
    electrificationAndLightning: '',
    buildingName: '',
    buildingNumber: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission or API call here
    console.log('Form submitted:', formData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Circulation Area</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="areaType" className="block text-gray-800 text-sm font-medium mb-2">
            Area Type
          </label>
          <select
            id="areaType"
            name="areaType"
            value={formData.areaType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Area Type</option>
            <option value="Type1">Type 1</option>
            <option value="Type2">Type 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="averageCarpetArea" className="block text-gray-800 text-sm font-medium mb-2">
            Average Carpet Area(in sq meters):
          </label>
          <input
            type="number"
            id="averageCarpetArea"
            name="averageCarpetArea"
            value={formData.averageCarpetArea}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="flooring" className="block text-gray-800 text-sm font-medium mb-2">
            Flooring
          </label>
          <input
            type="checkbox"
            id="flooring"
            name="flooring"
            checked={formData.flooring}
            onChange={handleChange}
            className="mt-1 p-2"
          />
        </div>

        <div>
          <label htmlFor="paintingDone" className="block text-gray-800 text-sm font-medium mb-2">
            Painting Done
          </label>
          <select
            id="paintingDone"
            name="paintingDone"
            value={formData.paintingDone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Painting Status</option>
            <option value="Ready">Ready</option>
            <option value="NotReady">Not Ready</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="electrificationAndLightning"
            className="block text-gray-800 text-sm font-medium mb-2"
          >
            Electrification and Lightning
          </label>
          <select
            id="electrificationAndLightning"
            name="electrificationAndLightning"
            value={formData.electrificationAndLightning}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Electrification Status</option>
            <option value="Ready">Ready</option>
            <option value="NotReady">Not Ready</option>
          </select>
        </div>

        <div>
          <label htmlFor="buildingName" className="block text-gray-800 text-sm font-medium mb-2">
            Building Name
          </label>
          <input
            type="text"
            id="buildingName"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="buildingNumber" className="block text-gray-800 text-sm font-medium mb-2">
            Building Number
          </label>
          <input
            type="number"
            id="buildingNumber"
            name="buildingNumber"
            value={formData.buildingNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
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

export default CirculationAreaForm;
