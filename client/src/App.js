import logo from './logo.svg';
// import './App.css';
import Footer from "../src/Components/Footer/footer"
import About from "./Pages/About/about"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/about" element={<About/>} />
        {/* <Route path='*' element={<Home/>}></Route> */}
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
