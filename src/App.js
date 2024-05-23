import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout/Layout';
import ApplicationProcess from './components/ApplicationProcess';
import ChatBot from './components/ChatBot';
import MyDocs from './components/MyDocs';
import Logout from './components/Logout';
import LoginPage from './pages/LoginPage';
import Registration from './pages/Registraton';
import InstituteDetails from './pages/InstituteDetails';
import { useState } from 'react';
import ContactPersonForm from './pages/contactPersonDetails';
import TrusteeDetailsForm from './pages/trusteeDetails';
import LandDetailsForm from './pages/LandDetails';
import InstituteForm from './pages/MoreInstituteDetails';
import SubSectionForm from './pages/subsectionModel';
import OrganisationDetailsForm from './pages/organizationDetails';
import QuestionnaireForm from './pages/questionnaire2';
import ProgramDetailsForm from './pages/programDetails';
import CourseDetailsForm from './pages/courseDetails';
import MoreLandInformationForm from './pages/moreLandDetails';
import BuildingDetailsForm from './pages/buildingDetails';
import BuildingDetailsMoreDetailsForm from './pages/moreBuildingDetials';
import LaboratoryDetailsForm from './pages/laboratoryDetails';
import AdministrativeAreaForm from './pages/administrativeArea';
import AmenitiesAreaForm from './pages/amenititesArea';
import CirculationAreaForm from './pages/circulationArea';
import InstructionalAreaForm from './pages/instructionalArea';
import InfrastructuralAreaForm from './pages/infrastructuralArea';
import HostelFacilitiesForm from './pages/hostelAmenitites';
import ComputationalFacilitiesForm from './pages/computationalFacilities';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import TextSlider from './components/TextSlider';
import AboutUs from './components/AboutUs';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import ElgibilityChecker from './components/EligibilityChecker';
import axios from 'axios';
function LandingPage() {

  return (
    <div className="App " style={{ backgroundColor: '#f1efed' }}>
      <Header />
      <div className="relative mt-20">
        <Slideshow />
        <TextSlider />
        <div id='about'>
        <AboutUs /><br/><br/><br/><br/><br/><br/>
        </div>
        <div id='FAQs'>
        <FAQs/>
        </div>
        <div style={{ backgroundColor: '#f1efed' }}></div>
        <Footer/>
      </div>
      
    </div>
  );
}



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/eligibility" element={<ElgibilityChecker />} />
        <Route path="/my-documents" element={<MyDocs />}> </Route>
        <Route path="/" element={<LandingPage />} />
        
            <Route path="/loginPage" element={<LoginPage  />} />
            <Route path="/registerPage" element={<Registration />} />
          

          
          <Route path="/dashboard" element={<Layout />} >
            <Route index={true} element={<Dashboard />} />
            <Route path="my-documents" element={<MyDocs />} />
            <Route path="logout" element={<Logout  />} />
          </Route>
            <Route path="/chatbot" element={<ChatBot />} >
            </Route>
            <Route path="/application-process" element={<ApplicationProcess />} >
              <Route path="institute-details" element={<InstituteDetails />}/>
              <Route path="more-institute-details" element={<InstituteForm />}/>
              <Route path="subsection" element={<SubSectionForm />}/>
              <Route path="organisation-details" element={<OrganisationDetailsForm />}/>
              <Route path="trustee-details" element={<TrusteeDetailsForm />}/>
              <Route path="contact-person-details" element={<ContactPersonForm />}/>
              <Route path="questionnaire" element={<QuestionnaireForm />}/>
              <Route path="program-details" element={<ProgramDetailsForm />}/>
              <Route path="course-details" element={<CourseDetailsForm />}/>
              <Route path="land-details" element={<LandDetailsForm />}/>
              <Route path="more-land-details" element={<MoreLandInformationForm />}/>
              <Route path="building-details" element={<BuildingDetailsForm />}/>
              <Route path="more-building-details" element={<BuildingDetailsMoreDetailsForm />}/>
              <Route path="laboratory-details" element={<LaboratoryDetailsForm />}/>
              <Route path="administrativeArea-details" element={<AdministrativeAreaForm />}/>
              <Route path="amenititesArea-details" element={<AmenitiesAreaForm />}/>
              <Route path="circulationArea-details" element={<CirculationAreaForm />}/>
              <Route path="instructionalArea-details" element={<InstructionalAreaForm />}/>
              <Route path="infrastructuralArea-details" element={<InfrastructuralAreaForm />}/>
              <Route path="hostelfacilities-details" element={<HostelFacilitiesForm />}/>
              <Route path="computationalfacilities-details" element={<ComputationalFacilitiesForm />}/>
              </Route>
         
      </Routes>
    </Router>
  );
}

export default App;
