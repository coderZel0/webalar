import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={<div>
        <Hero/>
        <Services/>
        <Works/>
       </div>} />
       <Route path='/contact' element={<Contact/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
