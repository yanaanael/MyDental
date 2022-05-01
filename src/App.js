import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MyAppointments from "./Pages/Profile/MyAppointments/MyAppointments";
import Profile from "./Pages/Profile/Profile";
import AboutPage from "./Pages/AboutPage/AboutPage";
import MyDoctor from "./Pages/Profile/MyDoctor/MyDoctor";
import BookAppointment from "./Pages/Profile/BookAppointment/BookAppointment";
import MyMessages from "./Pages/Profile/MyMessages/MyMessages";
import ContactUs from "./Pages/Profile/ContactUs/ContactUs";
import ChatPage from "./Pages/Profile/ChatPage/ChatPage";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import StaffProfile from "./Pages/StaffProfile/StaffProfile";

import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";








function App() {
  return (
    <Router>
      <div className="App homePage">
        <Header />
        {/* <Navigate exact from="/" to="/home" />   */}
        <Routes>
          {/* <HomePage/> */}

          <Route path="home" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="profile" element={<Profile />}/>
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="myAppointments" element={<MyAppointments />} />
          <Route path="myDoctor" element={<MyDoctor />} />
          <Route path="bookAppointment" element={<BookAppointment />} />
          <Route path="myMessages" element={<MyMessages />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="chatPage" element={<ChatPage />} />
          <Route path="doctorProfile" element={<DoctorProfile />} />
          <Route path="staffProfile" element={<StaffProfile />} />



        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
