import React from 'react'
import Wrapper from './style'
import {Route as R, BrowserRouter as Router} from 'react-router-dom'

//components
import Startmenu from '../startmenu'
import Login from '../auth/login'
import Signup from '../auth/signup'

export default () =>
  <Wrapper>
    <Router>
      <R exact path='/' component={Startmenu} />
      <R exact path='/login' component={Login} />
      <R exact path='/signup' component={Signup} />
    </Router>
  </Wrapper>