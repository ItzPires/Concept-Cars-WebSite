import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Designers from './pages/Designers';
import CarList from "./pages/CarList.js";

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/designers" element={<Designers />} />
          <Route path="/cars" element={<CarList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
