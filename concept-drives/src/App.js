import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Designers from './pages/Designers';

function App() {

  return (
    <div className="App">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/designers" element={<Designers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
