import './styles/style.css'

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginForm from './components/auth/LoginForm.component'
import SignUpForm from './components/auth/SignUpForm.component'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/shared/Navbar.component'
import { store } from './store/configureStore'

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
          <Router>
            <Route exact path='/' component={LoginForm} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/dashboard' component={Dashboard} />
          </Router>
      </Provider>
    </div>
  );
}

export default App;
