import Navbar from './components/Navbar';
import './App.css';
import Banner from './components/Banner'
import About from './components/About'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {
  return (
  <>
  <BrowserRouter> 
  
  <Navbar/>
  <Banner/>
  <About/>
  <Routes>

    <Route element={<About/>} path="About"/>
    <Route element={<Banner/>} path="Banner"/>
    
  
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
