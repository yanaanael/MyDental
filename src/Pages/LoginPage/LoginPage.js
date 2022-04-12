import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage(props) {
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
    <div className="LoginPage-container">
      <p>כניסה למערכת</p>
      <form>
        <label>
          :שם משתמש
          <input type="text" userName="userName" />
        </label>

        <label>
          :סיסמה
          <input type="Password" password="password" />
        </label>
        <Link className="button btn-primary" to="/profile"
         style={{
          backgroundColor: isMousedOver ? "rgb(57, 124, 212)" : "white",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMOuseOut}>
          אישור
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
