
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './panels/user/components/Footer';
import Header from './panels/user/components/Header';
import Home from './panels/user/sections/medicines/Home';
import BlogCards from './panels/user/sections/blog/BlogCards';
import BlogDetails from './panels/user/sections/blog/BlogDetails';
import About from './panels/user/sections/More/About';
import Contact from './panels/user/sections/More/Contact';
import PrivacyPolicy from './panels/user/sections/More/PrivacyPolicy';
import TermsandCondition from './panels/user/sections/More/TermsandCondition';
import Refund from './panels/user/sections/More/Refund';
import Return from './panels/user/sections/More/Return';
import SubCategories from './panels/user/sections/medicines/SubCategories';
import Product from './panels/user/sections/medicines/Product';
import Cart from './panels/user/sections/medicines/Cart';
import Profile from './panels/user/sections/userprofile/Profile';
import Appointments from './panels/user/sections/userprofile/Appointments';
import LabTest from './panels/user/sections/userprofile/Labtest';
import MedicalRecords from './panels/user/sections/userprofile/MedicalRecords';
import ProfileDetails from './panels/user/sections/userprofile/ProfileDetails';
import Orders from './panels/user/sections/userprofile/Orders';
import OrderDetails from './panels/user/sections/userprofile/OrderDetails';
import Test from './panels/user/sections/userprofile/Test';
import MedicineDelivery from './panels/user/sections/More/MedicineDelivery';
import ScrollToTop from './authentication/ScrollToTop';
import Doctors from './panels/user/sections/doctors/Doctor';
import DoctorList from './panels/user/sections/doctors/DoctorList';
import DoctorProfile from './panels/user/sections/doctors/DoctorProfile';
import Checkout from './panels/user/sections/doctors/Checkout';
import Settings from './panels/user/sections/userprofile/Settings';
import Feedback from './panels/user/sections/userprofile/Feedback';
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/medicines" element={<Home />} />
        <Route path="/subcategories" element={<SubCategories />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<BlogCards />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandcondition" element={<TermsandCondition />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/return" element={<Return />} />
        <Route path="/medicinedelivery" element={<MedicineDelivery />} />
        
        
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/labtest" element={<LabTest />} />
        <Route path="/medicalrecords" element={<MedicalRecords />} />
        <Route path="/profileDetails" element={<ProfileDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order/:id" element={<OrderDetails/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/feedback" element={<Feedback/>} />

        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctorsList" element={<DoctorList />} />
        <Route path="/doctorsProfile" element={<DoctorProfile />} />
        <Route path="/Checkout" element={<Checkout />} />



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
