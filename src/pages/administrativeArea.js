// AdministrativeAreaForm.js

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const AdministrativeAreaForm = () => {

  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    roomID: '',
    roomType: '',
    area: 0,
    buildingName: '',
    buildingNumber: 0,
    readinessofFlooring: '',
    readinessofWallAndPainting: '',
    readinessofElectrificationAndLightning: '',
    readinessofFurniture: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDeficiency = () => {
    console.log(formData.roomType);
    console.log(formData.area);

    if(formData.roomType === 'Principal/Director Office'){
        if(formData.area < 30){
            alert('The area of Principal/Director office must be more than or equal to 30 square meters');
            return true;
        }
    }

    else if(formData.roomType === 'Board Room'){
        if(formData.area < 20){
            alert('The area of board room must be more than or equal to 20 square meters');
            return true;
        }
    }

    else if(formData.roomType === 'Office All Inclusive'){
        if(formData.area < 150){
            alert('The number of offices in the "Office All Inclusive" should not be less than 150');
            return true;
        }
    }

    else if(formData.roomType === 'Department Offices/ Cabin for Head of Dept'){
        if(formData.area < 160){
            alert("The area of department offices/cabin for head of dept must be more than or equal to 160 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'Central Store'){
        if(formData.area < 30){
            alert("The area of central store can not be less than 30 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'Maintenance'){
        if(formData.area < 10){
            alert("The area of maintenance workshop can not be less than 10 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'Security'){
        if(formData.area < 10){
            alert("The area of security room can not be less than 10 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'HouseKeeping'){
        if(formData.area < 10){
            alert("The area of house keeping room can not be less than 10 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'Pantry for Staff/Faculty'){
        if(formData.area < 10){
            alert("The area of pantry should be at least 10 square meter.");
            return true;
        }
    }

    else if(formData.roomType === 'Exam Control Office'){
        if(formData.area < 30){
            alert("The area of Examination control office should be minimum 30 sqr.meter.");
            return true;
        }
    }

    else if(formData.roomType === 'Training Placement Office'){
        if(formData.area < 30){
            alert("The area of Training and Placement Office should be minimum 30 sqr.meters.");
            return true;
        }
    }

    return false;
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasDeficiency = handleDeficiency();
    if(hasDeficiency){
        return;
    }
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md">
      <h2 className='text-3xl font-bold mb-4'>Administration Area </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='relative'>
          <input
            type="text"
            id="roomID"
            name="roomID"
            value={formData.roomID}
            onChange={handleChange}
            class="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
          />
          <label htmlFor="roomID" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">
            Room ID:
          </label>
        </div>

        <div>
            <label htmlFor="roomType" className="block text-gray-800 text-sm font-medium mb-2">
                Room Type:
            </label>
            <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            >
                <option value="Principal/Director Office">Principal/Director Office</option>
                <option value="Board Room">Board Room</option>
                <option value="Office All Inclusive">Office All Inclusive</option>
                <option value="Department Offices/ Cabin for Head of Dept">Department Offices/ Cabin for Head of Dept</option>
                <option value="Central Store">Central Store</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Security">Security</option>
                <option value="HouseKeeping">HouseKeeping</option>
                <option value="Pantry for Staff/Faculty">Pantry for Staff/Faculty</option>
                <option value="Exam Control Office">Exam Control Office</option>
                <option value="Training Placement Office">Training Placement Office</option>
                {/* Add more options as needed */}
            </select>
        </div>


        <div>
          <label htmlFor="area" className="block text-gray-800 text-sm font-medium mb-2">
            Area (in sq meters):
          </label>
          <input
            type="number"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="buildingName" className="block text-gray-800 text-sm font-medium mb-2">
            Building Name:
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
            Building Number:
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

        <div>
          <label htmlFor="readinessofFlooring" className="block text-gray-800 text-sm font-medium mb-2">
            Readiness of Flooring:
          </label>
          <input
            type="text"
            id="readinessofFlooring"
            name="readinessofFlooring"
            value={formData.readinessofFlooring}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="readinessofWallAndPainting" className="block text-gray-800 text-sm font-medium mb-2">
            Readiness of Wall and Painting:
          </label>
          <input
            type="text"
            id="readinessofWallAndPainting"
            name="readinessofWallAndPainting"
            value={formData.readinessofWallAndPainting}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="readinessofElectrificationAndLightning" className="block text-gray-800 text-sm font-medium mb-2">
            Readiness of Electrification and Lightning:
          </label>
          <input
            type="text"
            id="readinessofElectrificationAndLightning"
            name="readinessofElectrificationAndLightning"
            value={formData.readinessofElectrificationAndLightning}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="readinessofFurniture" className="block text-gray-800 text-sm font-medium mb-2">
            Readiness of Furniture:
          </label>
          <input
            type="text"
            id="readinessofFurniture"
            name="readinessofFurniture"
            value={formData.readinessofFurniture}
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

export default AdministrativeAreaForm;
