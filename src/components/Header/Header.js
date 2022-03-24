import "./Header.css"
import logo from "../../images/mydental-logo.png"
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <div className="headerContainer">
      {/* <p className="headerTitle">MyDental</p> */}
        <Link to="home"> <img className="logo" src={logo} alt="logo"/></Link>
      <div className="nav-links">
        <Link className="nav-link" to="about" >אודות</Link>
        <Link className="nav-link primaryButton" to="login" >הרשם \ הכנס</Link>
      </div>
    </div>
  );
}

export default Header;
