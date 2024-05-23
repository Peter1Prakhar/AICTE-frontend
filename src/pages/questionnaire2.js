import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const QuestionnaireForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC: false,
    ifYesPleaseSelectApprovedProgram: '',
    whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA: false,
    ifYouAreOnExistingInstitutionRunningPGDMorPGCM: null,
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
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">Questionnaire</h2>
    <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
    <div className='flex flex-row flex-wrap'>
      {/* Whether the Institute is having approval */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">
          <input
            type="checkbox"
            name="whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC"
            checked={formData.whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
          Whether the Institute is having approval from COA or PCI or AAC
        </label>
      </div>

      {/* If yes, please select approved program */}
      {formData.whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC && (
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Approved Program:</label>
          <select
            name="ifYesPleaseSelectApprovedProgram"
            value={formData.ifYesPleaseSelectApprovedProgram}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Program</option>
            <option value="Program1">Program 1</option>
            <option value="Program2">Program 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      )}

      {/* Whether the Institute is a non-technical institute seeking approval for MBA or MCA */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">
          <input
            type="checkbox"
            name="whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA"
            checked={formData.whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
          Whether the Institute is a non-technical institute seeking approval for MBA or MCA
        </label>
      </div>

      {/* If you are an existing institution running PGDM or PGCM */}
      <div className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">
          <input
            type="number"
            name="ifYouAreOnExistingInstitutionRunningPGDMorPGCM"
            value={formData.ifYouAreOnExistingInstitutionRunningPGDMorPGCM || ''}
            onChange={handleChange}
            placeholder="Number"
            className="mt-1 p-2 border border-blue-500 rounded "
          />
          If you are an existing institution running PGDM or PGCM (Number)
        </label>
      </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300">Submit</button>
    </form>
    </div>
  );
};

export default QuestionnaireForm;
