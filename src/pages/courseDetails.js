import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const CourseDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    programme: '',
    affiliatingUniversity: '',
    department: '',
    nameOfTheCourse: '',
    duration: '',
    levelOfCourse: '',
    yearStarted: '',
    shift: '',
    fullTimeorPartTime: '',
    intakeApplicableFor: '',
    applyingFor: '',
    modeOFCounduct: '',
    courseType: '',
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
      <h2 className="text-2xl font-bold text-black mb-4">Course Details</h2>
      <form onSubmit={handleSubmit} className='flex flex-row flex-wrap'>
        {/* Course Programme Dropdown */}
        <div className='flex flex-row flex-wrap'>
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

        {/* Affiliating University */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Affiliating University:</label>
          <input
            type="text"
            name="affiliatingUniversity"
            value={formData.affiliatingUniversity}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Department */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Name of the Course */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Name of the Course:</label>
          <input
            type="text"
            name="nameOfTheCourse"
            value={formData.nameOfTheCourse}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Duration */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Duration (in years):</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Level of Course Dropdown */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Level of Course:</label>
          <select
            name="levelOfCourse"
            value={formData.levelOfCourse}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Level</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Year Started */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Year Started:</label>
          <input
            type="text"
            name="yearStarted"
            value={formData.yearStarted}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Shift Dropdown (only applicable when mode of conduct is regular) */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Shift:</label>
          <select
            name="shift"
            value={formData.shift}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Shift</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Full-Time or Part-Time Dropdown */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Full-Time or Part-Time:</label>
          <select
            name="fullTimeorPartTime"
            value={formData.fullTimeorPartTime}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Option</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Intake Applicable For Dropdown */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Intake Applicable For:</label>
          <select
            name="intakeApplicableFor"
            value={formData.intakeApplicableFor}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Intake</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Applying For */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Applying For:</label>
          <input
            type="text"
            name="applyingFor"
            value={formData.applyingFor}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          />
        </div>

        {/* Mode of Conduct Dropdown */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Mode of Conduct:</label>
          <select
            name="modeOFCounduct"
            value={formData.modeOFCounduct}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Mode of Conduct</option>
            <option value="Regular">Regular</option>
            <option value="Distance">Distance</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Course Type Dropdown */}
        <div className="mb-4 p-6">
          <label className="block text-sm font-medium text-black">Select Course Type:</label>
          <select
            name="courseType"
            value={formData.courseType}
            onChange={handleChange}
           className="mt-1 p-2 border border-blue-500 rounded "
          >
            <option value="">Select Course Type</option>
            <option value="Type1">Type 1</option>
            <option value="Type2">Type 2</option>
            {/* Add more options as needed */}
          </select>
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
                <th>Affiliating University</th>
                <th>Department</th>
                <th>Name of the Course</th>
                <th>Duration</th>
                <th>Level of Course</th>
                <th>Year Started</th>
                <th>Shift</th>
                <th>Full-Time or Part-Time</th>
                <th>Intake Applicable For</th>
                <th>Applying For</th>
                <th>Mode of Conduct</th>
                <th>Course Type</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.programme}</td>
                  <td>{data.affiliatingUniversity}</td>
                  <td>{data.department}</td>
                  <td>{data.nameOfTheCourse}</td>
                  <td>{data.duration}</td>
                  <td>{data.levelOfCourse}</td>
                  <td>{data.yearStarted}</td>
                  <td>{data.shift}</td>
                  <td>{data.fullTimeorPartTime}</td>
                  <td>{data.intakeApplicableFor}</td>
                  <td>{data.applyingFor}</td>
                  <td>{data.modeOFCounduct}</td>
                  <td>{data.courseType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsForm;
