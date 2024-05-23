import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const BuildingDetailsMoreDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    buildingName: '',
    buildingApprovalNumber: '',
    sanctiondBuildUpArea: '',
    constructedBuildUpArea: '',
    approvedCarpetAreaInstructional: '',
    constructedCarpetAreaInstructional: '',
    approvedCarpetAreaAdministrative: '',
    constructiveCorpetAreaAdministrative: '',
    approvedCarpetAreaAmenities: '',
    constructedCarpetAreaAmenities: '',
    totalAreaApproved: '',
    totalAreaConstructed: '',
    activitiesConductedInTheBuilding: '',
    NonAICTEApprovedCoursesRunInTheBuilding: '',
    buildingPlanApprovalAuthority: '',
    buildingPlanApprovalDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Building Name */}
        <div>
          <label htmlFor="buildingName">Building Name:</label>
          <input
            type="text"
            id="buildingName"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleChange}
          />
        </div>

        {/* Building Approval Number */}
        <div>
          <label htmlFor="buildingApprovalNumber">Building Approval Number:</label>
          <input
            type="text"
            id="buildingApprovalNumber"
            name="buildingApprovalNumber"
            value={formData.buildingApprovalNumber}
            onChange={handleChange}
          />
        </div>

        {/* Sanctioned Build-Up Area */}
        <div>
          <label htmlFor="sanctiondBuildUpArea">Sanctioned Build-Up Area (in sq feet):</label>
          <input
            type="number"
            id="sanctiondBuildUpArea"
            name="sanctiondBuildUpArea"
            value={formData.sanctiondBuildUpArea}
            onChange={handleChange}
          />
        </div>

        {/* Constructed Build-Up Area */}
        <div>
          <label htmlFor="constructedBuildUpArea">Constructed Build-Up Area (in sq feet):</label>
          <input
            type="number"
            id="constructedBuildUpArea"
            name="constructedBuildUpArea"
            value={formData.constructedBuildUpArea}
            onChange={handleChange}
          />
        </div>

        {/* Approved Carpet Area Instructional */}
        <div>
          <label htmlFor="approvedCarpetAreaInstructional">Approved Carpet Area Instructional (in sq feet):</label>
          <input
            type="number"
            id="approvedCarpetAreaInstructional"
            name="approvedCarpetAreaInstructional"
            value={formData.approvedCarpetAreaInstructional}
            onChange={handleChange}
          />
        </div>

        {/* Constructed Carpet Area Instructional */}
        <div>
          <label htmlFor="constructedCarpetAreaInstructional">Constructed Carpet Area Instructional (in sq feet):</label>
          <input
            type="number"
            id="constructedCarpetAreaInstructional"
            name="constructedCarpetAreaInstructional"
            value={formData.constructedCarpetAreaInstructional}
            onChange={handleChange}
          />
        </div>

        {/* Approved Carpet Area Administrative */}
        <div>
          <label htmlFor="approvedCarpetAreaAdministrative">Approved Carpet Area Administrative (in sq feet):</label>
          <input
            type="number"
            id="approvedCarpetAreaAdministrative"
            name="approvedCarpetAreaAdministrative"
            value={formData.approvedCarpetAreaAdministrative}
            onChange={handleChange}
          />
        </div>

        {/* Constructed Carpet Area Administrative */}
        <div>
          <label htmlFor="constructiveCorpetAreaAdministrative">Constructed Carpet Area Administrative (in sq feet):</label>
          <input
            type="number"
            id="constructiveCorpetAreaAdministrative"
            name="constructiveCorpetAreaAdministrative"
            value={formData.constructiveCorpetAreaAdministrative}
            onChange={handleChange}
          />
        </div>

        {/* Approved Carpet Area Amenities */}
        <div>
          <label htmlFor="approvedCarpetAreaAmenities">Approved Carpet Area Amenities (in sq feet):</label>
          <input
            type="number"
            id="approvedCarpetAreaAmenities"
            name="approvedCarpetAreaAmenities"
            value={formData.approvedCarpetAreaAmenities}
            onChange={handleChange}
          />
        </div>

        {/* Constructed Carpet Area Amenities */}
        <div>
          <label htmlFor="constructedCarpetAreaAmenities">Constructed Carpet Area Amenities (in sq feet):</label>
          <input
            type="number"
            id="constructedCarpetAreaAmenities"
            name="constructedCarpetAreaAmenities"
            value={formData.constructedCarpetAreaAmenities}
            onChange={handleChange}
          />
        </div>

        {/* Total Area Approved */}
        <div>
          <label htmlFor="totalAreaApproved">Total Area Approved (in sq feet):</label>
          <input
            type="number"
            id="totalAreaApproved"
            name="totalAreaApproved"
            value={formData.totalAreaApproved}
            onChange={handleChange}
          />
        </div>

        {/* Total Area Constructed */}
        <div>
          <label htmlFor="totalAreaConstructed">Total Area Constructed (in sq feet):</label>
          <input
            type="number"
            id="totalAreaConstructed"
            name="totalAreaConstructed"
            value={formData.totalAreaConstructed}
            onChange={handleChange}
          />
        </div>

        {/* Activities Conducted in the Building */}
        <div>
          <label htmlFor="activitiesConductedInTheBuilding">Activities Conducted in the Building:</label>
          <textarea
            id="activitiesConductedInTheBuilding"
            name="activitiesConductedInTheBuilding"
            value={formData.activitiesConductedInTheBuilding}
            onChange={handleChange}
          />
        </div>

        {/* Non-AICTE Approved Courses Run in the Building */}
        <div>
          <label htmlFor="NonAICTEApprovedCoursesRunInTheBuilding">
            Non-AICTE Approved Courses Run in the Building (if any):
          </label>
          <textarea
            id="NonAICTEApprovedCoursesRunInTheBuilding"
            name="NonAICTEApprovedCoursesRunInTheBuilding"
            value={formData.NonAICTEApprovedCoursesRunInTheBuilding}
            onChange={handleChange}
          />
        </div>

        {/* Building Plan Approval Authority */}
        <div>
          <label htmlFor="buildingPlanApprovalAuthority">Building Plan Approval Authority:</label>
          <input
            type="text"
            id="buildingPlanApprovalAuthority"
            name="buildingPlanApprovalAuthority"
            value={formData.buildingPlanApprovalAuthority}
            onChange={handleChange}
          />
        </div>

        {/* Building Plan Approval Date */}
        <div>
          <label htmlFor="buildingPlanApprovalDate">Building Plan Approval Date:</label>
          <input
            type="date"
            id="buildingPlanApprovalDate"
            name="buildingPlanApprovalDate"
            value={formData.buildingPlanApprovalDate}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BuildingDetailsMoreDetailsForm;
