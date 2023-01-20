import './App.css'
//import Navbar from './components/Navbar'
//import Sidebar from './components/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          sup
        </p>
      </header>
    </div>
    */
    <Router>
      <Home />
    </Router>
  );
}

export default App;
