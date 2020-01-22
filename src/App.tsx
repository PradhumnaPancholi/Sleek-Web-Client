import './styles/style.css'

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginForm from './components/LoginForm.component'
import Navbar from './components/Navbar.component'
import SignUpForm from './components/SignUpForm.component'
import { store } from './store/configureStore'

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
          <Router>
            <Route exact path='/' component={LoginForm} />
            <Route path='/signup' component={SignUpForm} />
          </Router>
      </Provider>
    </div>
  );
}

export default App;
