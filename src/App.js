import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
      </Router>
    </div>
  );
}

export default App;
