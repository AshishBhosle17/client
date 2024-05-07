import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <>
      
        <Navbaar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
  );
}

export default App;
