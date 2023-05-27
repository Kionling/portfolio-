import logo from './logo.svg';
// import './App.css';
import Footer from "../src/Components/Footer/footer"
import About from "./Pages/About/about"
import Home from "./Pages/Home/home"
import Navbar from './Components/Navbar/navBar';
import Portfolio from './Pages/Portfolio/portfolio';
import Contact  from './Pages/Contact/contact';
import Today from './Components/Moment/moment';
import { DarkModeProvider } from './Components/darkMode/darkModeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ExampleComponent from './Components/darkMode/darkMode';
function App() {
  return (
    <DarkModeProvider>
    <Router>
      {/* <ExampleComponent/> */}
      <Navbar/>
      <Routes>
        <Route exact path='/portfolio' element={<Portfolio/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Home />} />
        <Route  path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
    </DarkModeProvider>
  );
}

export default App;
