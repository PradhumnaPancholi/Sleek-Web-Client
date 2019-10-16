import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.component';
import LoginForm from './components/LoginForm.component';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Route path='/' component={LoginForm} />
      </Router>
    </div>
  );
}

export default App;
