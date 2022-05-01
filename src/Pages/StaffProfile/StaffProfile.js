import "./StaffProfile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import logo from "../../images/profilepic.png";

function StaffProfile(props) {
  const [isMousedOver, setMouseOver] = useState(false);
  /*
    function handleClick() {
      //console.log("Clicked");
    //  <Route path="about" element={<AboutPage />}/>
    
    }*/

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMOuseOut() {
    setMouseOver(false);
  }

  return (
    <div className="ProfilePage">
      <h1>צוות מרפאה</h1>
      
      <div className="My-links">
        <Link className="My-appointments" to="/MyAppointments">
          רשימת תורים
        </Link>
        <Link className="My-doctor" to="/MyDoctor">
           רשימת מטופלים
        </Link>
        <Link className="Book-appointment" to="/BookAppointment">
          קביעת תור חדש
        </Link>
        <Link className="My-messages" to="/MyMessages">
          ההודעות שלי
        </Link>
        <Link className="Contact-us" to="/ContactUs">
          יצירת קשר
        </Link>
        <Link className="Chat-page" to="/ChatPage">
          צ'אט
        </Link>
      </div>
    </div>
  );
}

export default StaffProfile;
