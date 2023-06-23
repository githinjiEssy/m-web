 import './App.css';
import AboutPage from './Pages/AboutPage';
import Home from './Pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutpage' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
