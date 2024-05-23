import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const SubSectionForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    minorityInstitute: false,
    typeOfMinistry: '',
    nameOfMinority: '',
    nameOfMinorityOfLinguistic: '',
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
      <h2 className="text-2xl font-bold text-black mb-4">Minorities Form</h2>
    <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
      {/* Minority Institute */}
      <div  className="mb-4 p-6">
        <label className="block text-sm font-medium text-black">Minority Institute:</label>
        <input
          type="checkbox"
          name="minorityInstitute"
          checked={formData.minorityInstitute}
          onChange={handleChange}
          className="mt-1 p-2 border border-blue-500 rounded "
        />
        <span>Yes, the institute is a minority institute</span>
      </div>

      {/* Type of Ministry (only applicable when minority is true) */}
      {formData.minorityInstitute && (
        <div className='flex flex-row flex-wrap'>
          <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Type of Ministry:</label>
          <input
            type="text"
            name="typeOfMinistry"
            value={formData.typeOfMinistry}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
      </div>
      )}

      {/* Name of Minority (only applicable when minority is true) */}
      {formData.minorityInstitute && (
        <div className='flex flex-row flex-wrap'>
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Name of Minority:</label>
          <input
            type="text"
            name="nameOfMinority"
            value={formData.nameOfMinority}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        </div>
      )}

      {/* Name of Minority of Linguistic (only applicable when minority is true) */}
      {formData.minorityInstitute && (
        <div className='flex flex-row flex-wrap'>
        <div className='flex flex-row flex-wrap'>
          <label className="block text-sm font-medium text-black">
            Name of Minority of Linguistic:
          </label>
          <input
            type="text"
            name="nameOfMinorityOfLinguistic"
            value={formData.nameOfMinorityOfLinguistic}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>
        </div>
      )}

      <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300">
        Submit
      </button>
    </form>
    </div>
  );
};

export default SubSectionForm;
