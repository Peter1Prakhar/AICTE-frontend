// InstructionalAreaForm.js

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const InstructionalAreaForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    id: 0,  // You may remove or customize this field based on your needs
    programme: '',
    level: '',
    roomType: '',
    roomID: '',
    areaOfRoom: 0,
    buildingName: '',
    readinessOfFlooring: '',
    readinessOfWallAndPainting: '',
    readinessOfElectrificationAndLighting: '',
    readinessOfFurnitureOrFixtures: '',
    airConditioning: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDeficiency = () => {
    if(formData.roomType === 'Computer Center'){
        if(formData.areaOfRoom < 450){
            alert('The area of the Room should be at least 450 square feet for Computer Centre');
            return true;
        }
    }
    else if(formData.roomType === 'Library & Reading Room'){
        if(formData.areaOfRoom < 1360){
            alert("The area of the Room should be more than 1360 square feet for Library & Reading Room");
            return true;
        }
    }
    else if(formData.roomType === 'Language Laboratory'){
        if(formData.areaOfRoom < 66){
            alert('The area of Language Lab should be less than 66 square feet');
            return true;
        }
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission or API call here
    const hasDeficiency = handleDeficiency();
    if(hasDeficiency){
        return;
    }
    console.log('Form submitted:', formData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Instructional Area</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="programme" className="block text-gray-800 text-sm font-medium mb-2">
            Programme
          </label>
          <select
            id="programme"
            name="programme"
            value={formData.programme}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Programme</option>
            <option value="Programme1">Programme 1</option>
            <option value="Programme2">Programme 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="level" className="block text-gray-800 text-sm font-medium mb-2">
            Level
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Level</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            {/* Add more options as needed */}
          </select>
        </div>

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
            <option value="">Select Room Type</option>
            <option value="Library & Reading Room">Library & Reading Room</option>
            <option value="Language Laboratory">Language Laboratory</option>
            <option value="Computer Center">Language Laboratory</option>

            {/* Add more options as needed */}
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
            <option value="">Select Readiness</option>
            <option value="Ready">Ready</option>
            <option value="Not Ready">Not Ready</option>
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
            <option value="">Select Readiness</option>
            <option value="Ready">Ready</option>
            <option value="Not Ready">Not Ready</option>
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
            <option value="">Select Readiness</option>
            <option value="Ready">Ready</option>
            <option value="Not Ready">Not Ready</option>
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
            <option value="">Select Readiness</option>
            <option value="Ready">Ready</option>
            <option value="Not Ready">Not Ready</option>
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
            <option value="">Select Availability</option>
            <option value="Not Available">Not Available</option>
            <option value="Planned">Planned</option>
            <option value="Available">Available</option>
          </select>
        </div>

        <div>
          <label htmlFor="siteChangeFlag" className="block text-gray-800 text-sm font-medium mb-2">
            Site Change Flag
          </label>
          <select
            id="siteChangeFlag"
            name="siteChangeFlag"
            value={formData.siteChangeFlag}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Option</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        {/* Repeat the above pattern for other fields */}

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

export default InstructionalAreaForm;
