import "./Header.css"
import logo from "../../images/mydental-logo.png"

function Header(props) {

  return (
    <div className="headerContainer">
      {/* <p className="headerTitle">MyDental</p> */}
      <img className="logo" src={logo}/>
      <div className="nav-links">
        <a href="#" className="nav-link">אודות</a>
        <a href="#" className=" primaryButton" >הרשם \ הכנס</a>
       
      </div>
    </div>
  );
}

export default Header;
