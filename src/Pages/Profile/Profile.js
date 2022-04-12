import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import logo from "../../images/profilepic.png";

function Profile(props) {
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
      <h1>הפרופיל שלי</h1>
      <div className="Details-box">
        <img className="logo" src={logo} alt="logo" />
        <p>שם פרטי ומשפחה</p>
      </div>
      <div className="My-links">
        <Link className="My-appointments" to="/MyAppointments">
          התורים שלי
        </Link>
        <Link className="My-doctor" to="/MyDoctor">
          הרופא שלי
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

export default Profile;
