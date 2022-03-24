
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';

import AboutPage
 from './Pages/AboutPage/AboutPage';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App homePage">
        <Header/>
        {/* <Navigate exact from="/" to="/home" />   */}
        <Routes>
      {/* <HomePage/> */}
          
          <Route path="home" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}/>
          <Route path="login" element={<LoginPage />}/>

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
