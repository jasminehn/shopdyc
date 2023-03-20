import './App.css'
//import Navbar from './components/Navbar'
//import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import OrderPage from './pages/order'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/shopdyc" element={<Home />} /> {/* temp because of github pages/package.json "homepage" problem */}
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>

    /*<Router>
      <Home />
    </Router>*/
  );
}

export default App;
