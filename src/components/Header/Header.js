import "./Header.css"
import logo from "../../images/mydental-logo.png"

function Header(props) {

  return (
    <div className="headerContainer">
      {/* <p className="headerTitle">MyDental</p> */}
      <img className="logo" src={logo} alt="logo"/>
      <div className="nav-links">
        <a href="google.com" className="nav-link">אודות</a>
        <a href="google.com" className="nav-link primaryButton" >הרשם \ הכנס</a>
       
      </div>
    </div>
  );
}

export default Header;
