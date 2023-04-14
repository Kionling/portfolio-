import logo from './logo.svg';
// import './App.css';
import Footer from "../src/Components/Footer/footer"
import About from "./Pages/About/about"
import Home from "./Pages/Home/home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
