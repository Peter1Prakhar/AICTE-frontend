import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const BuildingDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    buildingDetails: '',
    totalBuiltUpAreaReady: '',
    activitiesInTheBuildingOtherThanCoursesApprovedByAICTE: '',
    whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms: false,
    totalCarpetAreaInstructionalReady: '',
    totalCarpetAreaAdministrativeReady: '',
    accessAndCirculationArea: '',
    totalBuiltUpAreaPlanned: '',
    totalCarpetAreaAmenitiesReady: '',
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
      <h2 className="text-2xl font-bold text-black mb-4">Building Details</h2>
      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
        {/* Building Details */}
        <div className="mb-4 p-6">
          <label htmlFor="buildingDetails" className="block text-sm font-medium text-black">Building Details:</label>
          <select
            id="buildingDetails"
            name="buildingDetails"
            value={formData.buildingDetails}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select</option>
            {/* Add your options here */}
          </select>
        </div>

        {/* Total Built-Up Area Ready */}
        <div className="mb-4 p-6">
          <label htmlFor="totalBuiltUpAreaReady" className="block text-sm font-medium text-black">Total Built-Up Area Ready (in sq feet):</label>
          <input
            type="text"
            id="totalBuiltUpAreaReady"
            name="totalBuiltUpAreaReady"
            value={formData.totalBuiltUpAreaReady}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Activities in the Building Other Than Courses Approved by AICTE */}
        <div className="mb-4 p-6">
          <label htmlFor="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE" className="block text-sm font-medium text-black">
            Activities in the Building Other Than Courses Approved by AICTE:
          </label>
          <textarea
            id="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE"
            name="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE"
            value={formData.activitiesInTheBuildingOtherThanCoursesApprovedByAICTE}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Whether Access Circulation Area and Toilet Area Are Maintained As Per National Building Code Norms */}
        <div className="mb-4 p-6">
          <label htmlFor="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms" className="block text-gray-800 text-sm font-medium mb-2">
            Whether Access Circulation Area and Toilet Area Are Maintained As Per National Building Code Norms:
          </label>
          <input
            type="checkbox"
            id="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms"
            name="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms"
            checked={formData.whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Total Carpet Area Instructional Ready */}
        <div className="mb-4 p-6">
          <label htmlFor="totalCarpetAreaInstructionalReady" className="block text-sm font-medium text-black">Total Carpet Area Instructional Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaInstructionalReady"
            name="totalCarpetAreaInstructionalReady"
            value={formData.totalCarpetAreaInstructionalReady}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Total Carpet Area Administrative Ready */}
        <div className="mb-4 p-6">
          <label htmlFor="totalCarpetAreaAdministrativeReady" className="block text-sm font-medium text-black">Total Carpet Area Administrative Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaAdministrativeReady"
            name="totalCarpetAreaAdministrativeReady"
            value={formData.totalCarpetAreaAdministrativeReady}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Access and Circulation Area */}
        <div className="mb-4 p-6">
          <label htmlFor="accessAndCirculationArea" className="block text-sm font-medium text-black">Access and Circulation Area (in sq feet):</label>
          <input
            type="text"
            id="accessAndCirculationArea"
            name="accessAndCirculationArea"
            value={formData.accessAndCirculationArea}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Total Built-Up Area Planned */}
        <div className="mb-4 p-6">
          <label htmlFor="totalBuiltUpAreaPlanned" className="block text-sm font-medium text-black">Total Built-Up Area Planned (in sq feet):</label>
          <input
            type="text"
            id="totalBuiltUpAreaPlanned"
            name="totalBuiltUpAreaPlanned"
            value={formData.totalBuiltUpAreaPlanned}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Total Carpet Area Amenities Ready */}
        <div className="mb-4 p-6">
          <label htmlFor="totalCarpetAreaAmenitiesReady" className="block text-sm font-medium text-black">Total Carpet Area Amenities Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaAmenitiesReady"
            name="totalCarpetAreaAmenitiesReady"
            value={formData.totalCarpetAreaAmenitiesReady}
            onChange={handleChange}
            cclassName="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BuildingDetailsForm;
