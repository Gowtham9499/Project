import './App.css';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Services from './Services';
import Usedetails from './Usedetails';
import NotFound from './NotFound';
import ProtectedRoutes from './ProtectedRoutes';


function App() {
  return (
    <Router> 
      <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/usedetails' element={<Usedetails />} />
      <Route path ='/protectedroutes' element={<ProtectedRoutes />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </Router>
  );
}

export default App;