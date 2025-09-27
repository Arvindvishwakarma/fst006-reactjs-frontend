import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { StateProvider } from './context/StateContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <StateProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </StateProvider>
      </BrowserRouter>
    </>
  )
}


function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <h2>You click the wrong path</h2>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}
export default App
