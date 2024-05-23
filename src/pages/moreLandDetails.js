import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const MoreLandInformationForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    landRegistrationNumber: '',
    dateOfRegistration: '',
    areaOfLand: '',
    khosraNumbers: '',
    plotNumber: '',
    landSituatedAt: '',
    landRegisteredInTheNameOf: '',
    ownershiporGovernanentLease: '',
    landUseCertificateIssued: false,
    landUseCertificationAuthority: '',
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
      <h2 className="text-2xl font-bold text-black mb-4">More Land Details Form</h2>
      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
        {/* Land Registration Number */}
        <div className='flex flex-row flex-wrap'>
        <div className="mb-4 p-6">
          <label htmlFor="landRegistrationNumber" className="block text-sm font-medium text-black">Land Registration Number:</label>
          <input
            type="text"
            id="landRegistrationNumber"
            name="landRegistrationNumber"
            value={formData.landRegistrationNumber}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Date of Registration */}
        <div className="mb-4 p-6">
          <label htmlFor="dateOfRegistration"
          className="block text-sm font-medium text-black">Date of Registration:</label>
          <input
            type="date"
            id="dateOfRegistration"
            name="dateOfRegistration"
            value={formData.dateOfRegistration}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Area of Land */}
        <div className="mb-4 p-6">
          <label htmlFor="areaOfLand"
          className="block text-sm font-medium text-black">Area of Land(in sq meters):</label>
          <input
            type="text"
            id="areaOfLand"
            name="areaOfLand"
            value={formData.areaOfLand}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Khosra Numbers */}
        <div className="mb-4 p-6">
          <label htmlFor="khosraNumbers"
          className="block text-sm font-medium text-black">Khosra Numbers:</label>
          <input
            type="text"
            id="khosraNumbers"
            name="khosraNumbers"
            value={formData.khosraNumbers}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Plot Number */}
        <div className="mb-4 p-6">
          <label htmlFor="plotNumber"
          className="block text-sm font-medium text-black">Plot Number:</label>
          <input
            type="text"
            id="plotNumber"
            name="plotNumber"
            value={formData.plotNumber}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Land Situated At */}
        <div className="mb-4 p-6">
          <label htmlFor="landSituatedAt"
          className="block text-sm font-medium text-black">Land Situated At:</label>
          <input
            type="text"
            id="landSituatedAt"
            name="landSituatedAt"
            value={formData.landSituatedAt}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Land Registered In The Name Of */}
        <div className="mb-4 p-6">
          <label htmlFor="landRegisteredInTheNameOf"
          className="block text-sm font-medium text-black">Land Registered In The Name Of:</label>
          <input
            type="text"
            id="landRegisteredInTheNameOf"
            name="landRegisteredInTheNameOf"
            value={formData.landRegisteredInTheNameOf}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Ownership or Government Lease */}
        <div className="mb-4 p-6">
          <label htmlFor="ownershiporGovernanentLease"
          className="block text-sm font-medium text-black">Ownership or Government Lease:</label>
          <select
            id="ownershiporGovernanentLease"
            name="ownershiporGovernanentLease"
            value={formData.ownershiporGovernanentLease}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select</option>
            {/* Add your options here */}
          </select>
        </div>

        {/* Land Use Certificate Issued */}
        <div className="mb-4 p-6">
          <label htmlFor="landUseCertificateIssued"
          className="block text-sm font-medium text-black">Land Use Certificate Issued:</label>
          <input
            type="checkbox"
            id="landUseCertificateIssued"
            name="landUseCertificateIssued"
            checked={formData.landUseCertificateIssued}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Land Use Certification Authority */}
        {formData.landUseCertificateIssued && (
          <div className="mb-4 p-6">
            <label htmlFor="landUseCertificationAuthority"
            className="block text-sm font-medium text-black">Land Use Certification Authority:</label>
            <input
              type="text"
              id="landUseCertificationAuthority"
              name="landUseCertificationAuthority"
              value={formData.landUseCertificationAuthority}
              onChange={handleChange}
              className="mt-1 p-2 border border-blue-500 rounded "
            />
          </div>
        )}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MoreLandInformationForm;
