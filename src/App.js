import './App.css';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <div className='navBar'><NavBar/></div>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/portfolio" element={<Portfolio/>}/>
        <Route path ="/contact" element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
