import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const LandDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    location: '',
    latitude: '',
    longitude: '',
    totalAreaInAcres: '',
    numberOfPieces: '',
    lattitudeDegree: '',
    londitudeDegree: '',
    landRestrictedWith: '',
    landPieceArea1InAcres: '',
    latitudeMinute: '',
    longitudeMinute: '',
    ownwershipDetails: '',
    landPieceArea2InAcres: '',
    landUseCertificateIssuedBy: '',
    landUseCertificateIssueDate: '',
    landInNorthernHillyArea: false,
    isLandMortgated: false,
    mortgatedPurpose: '',
    dateIFRegistration: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDeficiency = () => {
    if(formData.totalAreaInAcres < 7.5){
      alert("Area Land in total should be more than 7.5 acres");
      return true;
    }
    else if(formData.numberOfPieces > 1){
      alert("Maximum number of Pieces must not exceed 1");
      return true;
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const hasDeficiency = handleDeficiency();
    if(hasDeficiency){
      return;
    }
    console.log(formData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">Land Details</h2>
      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
      <div className='flex flex-row flex-wrap'>
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Location:</label>
          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="">Select Location</option>
            <option value="Location1">Location 1</option>
            <option value="Location2">Location 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Latitude Dropdown */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Latitude:</label>
          <select name="latitude" value={formData.latitude} onChange={handleChange}>
            <option value="">Select Latitude</option>
            <option value="Latitude1">Latitude 1</option>
            <option value="Latitude2">Latitude 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Longitude Dropdown */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Longitude:</label>
          <select name="longitude" value={formData.longitude} onChange={handleChange}>
            <option value="">Select Longitude</option>
            <option value="Longitude1">Longitude 1</option>
            <option value="Longitude2">Longitude 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Total Area in Acres */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Total Area in Acres:</label>
          <input
            type="text"
            name="totalAreaInAcres"
            value={formData.totalAreaInAcres}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Number of Pieces */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Number of Pieces:</label>
          <input
            type="text"
            name="numberOfPieces"
            value={formData.numberOfPieces}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Latitude Degree */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Latitude Degree (0 - 90):</label>
          <input
            type="text"
            name="lattitudeDegree"
            value={formData.lattitudeDegree}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Longitude Degree */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Longitude Degree (0 - 90):</label>
          <input
            type="text"
            name="londitudeDegree"
            value={formData.londitudeDegree}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Land Restricted With */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Land Restricted With:</label>
          <input
            type="text"
            name="landRestrictedWith"
            value={formData.landRestrictedWith}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Land Piece Area 1 in Acres */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Land Piece Area 1 in Acres:</label>
          <input
            type="text"
            name="landPieceArea1InAcres"
            value={formData.landPieceArea1InAcres}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Latitude Minute */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Latitude Minute (0 - 60):</label>
          <input
            type="text"
            name="latitudeMinute"
            value={formData.latitudeMinute}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Longitude Minute */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Longitude Minute (0 - 60):</label>
          <input
            type="text"
            name="longitudeMinute"
            value={formData.longitudeMinute}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Ownership Details Dropdown */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Ownership Details:</label>
          <select name="ownwershipDetails" value={formData.ownwershipDetails} onChange={handleChange}>
            <option value="">Select Ownership Details</option>
            <option value="Ownership1">Ownership 1</option>
            <option value="Ownership2">Ownership 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Land Piece Area 2 in Acres (applicable if pieces are 2) */}
        {formData.numberOfPieces === '2' && (
          <div className="mb-4 p-6">
            <label className="block text-sm font-medium text-black">Land Piece Area 2 in Acres:</label>
            <input
              type="text"
              name="landPieceArea2InAcres"
              value={formData.landPieceArea2InAcres}
              onChange={handleChange}
              className="mt-1 p-2 border border-blue-500 rounded "
            />
          </div>
        )}

        {/* Land Use Certificate Issued By */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Land Use Certificate Issued By:</label>
          <input
            type="text"
            name="landUseCertificateIssuedBy"
            value={formData.landUseCertificateIssuedBy}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Land Use Certificate Issue Date */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Land Use Certificate Issue Date:</label>
          <input
            type="text"
            name="landUseCertificateIssueDate"
            value={formData.landUseCertificateIssueDate}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Land in Northern Hilly Area Checkbox */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Land in Northern Hilly Area:</label>
          <input
            type="checkbox"
            name="landInNorthernHillyArea"
            checked={formData.landInNorthernHillyArea}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Is Land Mortgaged Checkbox */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Is Land Mortgaged:</label>
          <input
            type="checkbox"
            name="isLandMortgated"
            checked={formData.isLandMortgated}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Mortgaged Purpose (applicable when mortgaged is true) */}
        {formData.isLandMortgated && (
          <div className="mb-4 p-6">
            <label className="block text-sm font-medium text-black">Mortgaged Purpose:</label>
            <input
              type="text"
              name="mortgatedPurpose"
              value={formData.mortgatedPurpose}
              onChange={handleChange}
              className="mt-1 p-2 border border-blue-500 rounded "
            />
          </div>
        )}

        {/* Date of Registration */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Date of Registration:</label>
          <input
            type="text"
            name="dateIFRegistration"
            value={formData.dateIFRegistration}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LandDetailsForm;
