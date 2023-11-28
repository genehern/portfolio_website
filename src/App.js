import './App.css';
import Home from './page/home';
import Contact from './page/contact';
import Project from './page/project';
import Success from './page/success';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact/success" element={<Success />} />
        </Routes>
    </Router>
  
    </div>
  );
}

export default App;
