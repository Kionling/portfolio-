import logo from './logo.svg';
// import './App.css';
import Footer from "../src/Components/Footer/footer"
import About from "./Pages/About/about"
import Home from "./Pages/Home/home"
import Navbar from './Components/Navbar/navBar';
import Portfolio from './Pages/Portfolio/portfolio';
import Contact  from './Pages/Contact/contact';
import Today from './Components/Moment/moment';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Today/>
      <Navbar/>
      <Routes>
        
        <Route exact path='/portfolio' element={<Portfolio/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Home />} />
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
