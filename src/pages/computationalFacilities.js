// ComputationalFacilitiesForm.js

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const ComputationalFacilitiesForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    PClaptopsExclusivelyAvailableToStudents: 0,
    PClaptopsAvailableInLibrary: 0,
    PClaptopsAvailableInAdministrativeOffice: 0,
    PClaptopsAvailableForFacultyMember: 0,
    numberOfPcInLanguageLab: 0,
    internetBandwidthInMbps: 0,
    numberOfLegalApplicationSoftware: 0,
    printersAvailableToStudents: 0,
    numberOfA1SizeColorPrinter: 0,
    numberOfLegalSystemSoftware: 0,
    numberOfOpenSourceSoftware: 0,
    numberOfPropsitory: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDeficiency = () => {
    if(formData.internetBandwidthInMbps < 200){
        alert('Internet bandwidth should be at least 200 Mbps');
        return true;
    }
    else if(formData.printersAvailableToStudents < 51){
        alert("Number of available printers to students should be more than or equal to 50");
        return true;
    }
    else if(formData.numberOfPcInLanguageLab < 20){
        alert("The number of personal computers in the language lab should not be less than 20.");
        return true;
    }
    else if(formData.numberOfA1SizeColorPrinter < 0){
        alert("Invalid input for A1 size color printers.")
        return true;
    }
    else if(formData.numberOfLegalApplicationSoftware < 20){
        alert("At least 20 software applications are required for legal studies.")
        return true;
    }
    else if(formData.numberOfLegalSystemSoftware < 3){
        alert("At least three system-level software packages are needed for a complete legal environment.")
        return true;
    }
    
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
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
      <h2 className="text-2xl font-bold text-black mb-4">Computational Facilities</h2>
      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
        <div className='flex flex-row flex-wrap'>
        <div className="mb-4 p-6">
          <label htmlFor="PClaptopsExclusivelyAvailableToStudents" className="block text-sm font-medium text-black">
            PCs/Laptops Exclusively Available to Students
          </label>
          <input
            type="number"
            id="PClaptopsExclusivelyAvailableToStudents"
            name="PClaptopsExclusivelyAvailableToStudents"
            value={formData.PClaptopsExclusivelyAvailableToStudents}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="PClaptopsAvailableInLibrary" className="block text-sm font-medium text-black">
            PCs/Laptops Available in Library
          </label>
          <input
            type="number"
            id="PClaptopsAvailableInLibrary"
            name="PClaptopsAvailableInLibrary"
            value={formData.PClaptopsAvailableInLibrary}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="PClaptopsAvailableInAdministrativeOffice" className="block text-sm font-medium text-black">
            PCs/Laptops Available in Administrative Office
          </label>
          <input
            type="number"
            id="PClaptopsAvailableInAdministrativeOffice"
            name="PClaptopsAvailableInAdministrativeOffice"
            value={formData.PClaptopsAvailableInAdministrativeOffice}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="PClaptopsAvailableForFacultyMember" className="block text-sm font-medium text-black">
            PCs/Laptops Available for Faculty Member
          </label>
          <input
            type="number"
            id="PClaptopsAvailableForFacultyMember"
            name="PClaptopsAvailableForFacultyMember"
            value={formData.PClaptopsAvailableForFacultyMember}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="numberOfPcInLanguageLab" className="block text-sm font-medium text-black">
            Number of PCs in Language Lab
          </label>
          <input
            type="number"
            id="numberOfPcInLanguageLab"
            name="numberOfPcInLanguageLab"
            value={formData.numberOfPcInLanguageLab}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="internetBandwidthInMbps" className="block text-sm font-medium text-black">
            Internet Bandwidth (in Mbps)
          </label>
          <input
            type="number"
            id="internetBandwidthInMbps"
            name="internetBandwidthInMbps"
            value={formData.internetBandwidthInMbps}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="numberOfLegalApplicationSoftware" className="block text-sm font-medium text-black">
            Number of Legal Application Software
          </label>
          <input
            type="number"
            id="numberOfLegalApplicationSoftware"
            name="numberOfLegalApplicationSoftware"
            value={formData.numberOfLegalApplicationSoftware}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="printersAvailableToStudents" className="block text-sm font-medium text-black">
            Printers Available to Students
          </label>
          <input
            type="number"
            id="printersAvailableToStudents"
            name="printersAvailableToStudents"
            value={formData.printersAvailableToStudents}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="numberOfA1SizeColorPrinter" className="block text-sm font-medium text-black">
            Number of A1 Size Color Printer
          </label>
          <input
            type="number"
            id="numberOfA1SizeColorPrinter"
            name="numberOfA1SizeColorPrinter"
            value={formData.numberOfA1SizeColorPrinter}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="numberOfLegalSystemSoftware" className="block text-sm font-medium text-black">
            Number of Legal System Software
          </label>
          <input
            type="number"
            id="numberOfLegalSystemSoftware"
            name="numberOfLegalSystemSoftware"
            value={formData.numberOfLegalSystemSoftware}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="numberOfOpenSourceSoftware" className="block text-sm font-medium text-black">
            Number of Open Source Software
          </label>
          <input
            type="number"
            id="numberOfOpenSourceSoftware"
            name="numberOfOpenSourceSoftware"
            value={formData.numberOfOpenSourceSoftware}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        <div className="mb-4 p-6">
          <label htmlFor="numberOfPropsitory" className="block text-sm font-medium text-black">
            Number of Repositories
          </label>
          <input
            type="number"
            id="numberOfPropsitory"
            name="numberOfPropsitory"
            value={formData.numberOfPropsitory}
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

export default ComputationalFacilitiesForm;
