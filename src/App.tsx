import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/Toaster";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Doctors from "@/pages/Doctors";
import DoctorProfile from "@/pages/DoctorProfile";
import Treatments from "@/pages/Treatments";
import TreatmentDetail from "@/pages/TreatmentDetail";
import Technology from "@/pages/Technology";
import BeforeAfter from "@/pages/BeforeAfter";
import PatientStories from "@/pages/PatientStories";
import Contact from "@/pages/Contact";
import BookAppointment from "@/pages/BookAppointment";
import FAQ from "@/pages/FAQ";

function App() {
  return (
    <BrowserRouter basename="/Dental-clinic">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:slug" element={<DoctorProfile />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="treatments/:slug" element={<TreatmentDetail />} />
          <Route path="technology" element={<Technology />} />
          <Route path="before-after" element={<BeforeAfter />} />
          <Route path="patient-stories" element={<PatientStories />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
