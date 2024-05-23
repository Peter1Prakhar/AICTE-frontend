import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const Questionnaire = () => {

  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const navigate =useNavigate();

  const [formData, setFormData] = useState({});

  const handleCheckboxChange = (question, value) => {
    setFormData({
      ...formData,
      [question]: value,
    });
  };

  const handleValidateAndSubmit = (e) => {
    e.preventDefault();
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  const questions = [
    "Do you wish to apply for 'Extension of Approval (EOA)'?",
    "Do you wish to apply for any change(s) as per the provisions of this year's Approval Process Handbook?",
    "Merger of Courses in 'ENGINEERING AND TECHNOLOGY'",
    "Start New Programme(s)/ Level(s) in the Existing Institution",
    "Conversion of Management Institution running PGDM Course into MBA Course & Vice-Versa",
    "Change in the Name of the Course(s)",
    "Closing of MBA/PGDM Programme and Introduction of MCA Programme and vice-versa",
    "Merger of Institution under the same Trust/ Society/ Company operating in the same Campus",
    "Will your Institution continue as the parent Institution after the merger?",
    "Which is the Parent Institution with which your Institution is willing to merge?",
    "Change in the Name of the Institution",
    "Change of Site/ Location",
    "Conversion of Women's Institution into Co-ed Institution",
    "Change in the Name of the Affiliating University/Board",
    "Change in the Name of the Trust/ Society/ Company",
    "Is your Institution selected for the 'Study in India' Program by the Govt. of India?",
    "Does your institution have approval from PCI for PHARM.D. or/and PHARM.D. (POST BACCALAUREATE)?",
    "Do you want to change the minority status of the institution?",
    "Has your Institution converted into a Deemed to be/State Private University?",
    "Does your Institution have Autonomous Status (Academic Autonomy) as conferred by the Affiliating University?",
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Questionnaire</h2>

      {/* Render questions and simplified checkboxes */}
      {questions.map((question, index) => (
        <div key={index} className="mb-4 flex items-center">
          <label className="mr-2 text-base text-gray-800">{question}</label>
          <input
            type="checkbox"
            className='form-checkbox h-5 w-5 text-black border-gray-300'
            onChange={() => handleCheckboxChange(question, true)}
          />
        </div>
      ))}

      {/* Validate and Submit Button */}
      <button
        className="bg-gray-800 text-white py-2 px-4 rounded-md mt-4 hover:bg:gray-700"
        onClick={handleValidateAndSubmit}
      >
        Validate and Submit
      </button>
    </div>
  );
};

export default Questionnaire;
