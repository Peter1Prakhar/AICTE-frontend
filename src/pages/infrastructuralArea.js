import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const InfrastructuralAreaForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    roomType: '',
    roomID: '',
    areaOfRoom: 0,
    readinessOfFlooring: '',
    readinessOfWallAndPainting: '',
    readinessOfElectrificationAndLighting: '',
    readinessOfFurnitureOrFixtures: '',
    airConditioning: '',
    buildingName: '',
    buildingNumber: 0,
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
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Infrastructural Area</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="roomType" className="block text-gray-800 text-sm font-medium mb-2">
            Room Type
          </label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div>
          <label htmlFor="roomID" className="block text-gray-800 text-sm font-medium mb-2">
            Room ID
          </label>
          <input
            type="text"
            id="roomID"
            name="roomID"
            value={formData.roomID}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="areaOfRoom" className="block text-gray-800 text-sm font-medium mb-2">
            Area of Room (in sq meters):
          </label>
          <input
            type="number"
            id="areaOfRoom"
            name="areaOfRoom"
            value={formData.areaOfRoom}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="readinessOfFlooring" className="block text-gray-800 text-sm font-medium mb-2">
            Readiness of Flooring
          </label>
          <select
            id="readinessOfFlooring"
            name="readinessOfFlooring"
            value={formData.readinessOfFlooring}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div>
          <label
            htmlFor="readinessOfWallAndPainting"
            className="block text-gray-800 text-sm font-medium mb-2"
          >
            Readiness of Wall and Painting
          </label>
          <select
            id="readinessOfWallAndPainting"
            name="readinessOfWallAndPainting"
            value={formData.readinessOfWallAndPainting}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div>
          <label
            htmlFor="readinessOfElectrificationAndLighting"
            className="block text-gray-800 text-sm font-medium mb-2"
          >
            Readiness of Electrification and Lighting
          </label>
          <select
            id="readinessOfElectrificationAndLighting"
            name="readinessOfElectrificationAndLighting"
            value={formData.readinessOfElectrificationAndLighting}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div>
          <label
            htmlFor="readinessOfFurnitureOrFixtures"
            className="block text-gray-800 text-sm font-medium mb-2"
          >
            Readiness of Furniture or Fixtures
          </label>
          <select
            id="readinessOfFurnitureOrFixtures"
            name="readinessOfFurnitureOrFixtures"
            value={formData.readinessOfFurnitureOrFixtures}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div>
          <label htmlFor="airConditioning" className="block text-gray-800 text-sm font-medium mb-2">
            Air Conditioning
          </label>
          <select
            id="airConditioning"
            name="airConditioning"
            value={formData.airConditioning}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
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
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfrastructuralAreaForm;
