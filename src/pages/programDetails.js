import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const ProgramDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    programme: '',
    anyOtherNewProgram: '',
    yearOfStart: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...submittedData, formData];
    setSubmittedData(updatedData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white p-4 border rounded shadow ">
       <h2 className="text-2xl font-bold text-black mb-4">Program Details Form</h2>
      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
        {/* Programme Dropdown */}
        <div className='flex flex-col flex-wrap'> 
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Programme:</label>
          <select
            name="programme"
            value={formData.programme}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Programme</option>
            <option value="Programme1">Programme 1</option>
            <option value="Programme2">Programme 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Any Other New Program */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">
            <input
              type="text"
              name="anyOtherNewProgram"
              value={formData.anyOtherNewProgram}
              onChange={handleChange}
              className="mt-1 p-2 border border-blue-500 rounded "
              placeholder="Any Other New Program"
            />
          </label>
        </div>

        {/* Year of Start - Calendar */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">
            <input
              type="date"
              name="yearOfStart"
              value={formData.yearOfStart}
              onChange={handleChange}
              className="mt-1 p-2 border border-blue-500 rounded "
            />
          </label>
        </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
      

      {/* Display submitted data in a table */}
      {submittedData.length > 0 && (
        <div className="mb-4 p-6">
          <h2>Submitted Data</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Any Other New Program</th>
                <th>Year of Start</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.programme}</td>
                  <td>{data.anyOtherNewProgram}</td>
                  <td>{data.yearOfStart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProgramDetailsForm;
