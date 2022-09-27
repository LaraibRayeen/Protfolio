import Navbar from './components/Navbar';
import './App.css';
import Banner from './components/Banner'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route element={<Banner/>} path="Banner"/>

  
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
