import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Studio from './pages/Studio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/work' element={<Work />} />
          <Route path='/studio' element={<Studio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
