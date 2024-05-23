import React, { useState } from 'react';
import axios from 'axios';
const EligibilityChecker = () => {
  // State for image upload
  const [selectedImage, setSelectedImage] = useState(null);
  const [message,setMessage] = useState('')
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  // State for eligibility checkboxes
  const [eligibilityChecklist, setEligibilityChecklist] = useState({
    landAndBuiltUpArea: false,
    infrastructureSupport: false,
    additionalLaboratory: false,
  });

  // Handler for image upload
  const handleImageUpload = async(event) => {
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('image', file);
    console.log(formData)
    const response = await  axios.post('http://localhost:3500/upload', formData)
    console.log(response.data.message)
    setMessage(response.data.message)
    
  };

  // Handler for eligibility checkboxes
  const handleCheckboxChange = (checkboxName) => {
    setEligibilityChecklist((prevChecklist) => ({
      ...prevChecklist,
      [checkboxName]: !prevChecklist[checkboxName],
    }));
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Eligibility Checker</h1>
      <div className="flex">
        {/* First Column */}
        <div className="w-1/2 pr-4">
          {/* React Image Uploader */}
          <input type="file" onChange={handleImageUpload} className="mb-4" />
          {/* Display the uploaded image */}
          {selectedImage && (
            <img src={selectedImage} alt="Uploaded" className="max-w-full h-auto rounded" />
          )}
          {message && (<h1 className='text-blue-500'>Document Verified</h1>)}
        </div>

        {/* Second Column */}
        <div className="w-1/2 pl-4">
          {/* Eligibility Checkboxes */}
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={eligibilityChecklist.landAndBuiltUpArea}
              onChange={() => handleCheckboxChange('landAndBuiltUpArea')}
              className="mr-2"
            />
            Land and built-up area requirements met
          </label>

          <label className="block mb-2">
            <input
              type="checkbox"
              checked={eligibilityChecklist.infrastructureSupport}
              onChange={() => handleCheckboxChange('infrastructureSupport')}
              className="mr-2"
            />
            Necessary infrastructure and support systems available
          </label>

          <label className="block mb-2">
            <input
              type="checkbox"
              checked={eligibilityChecklist.additionalLaboratory}
              onChange={() => handleCheckboxChange('additionalLaboratory')}
              className="mr-2"
            />
            Permitted to use additional laboratory facilities
          </label>
        </div>
      </div>
    </div>
  );
};

export default EligibilityChecker;
