import React from 'react'
import Wrapper from './style'

//components
import Logo from '../../design/icons/liftquest'

const StartMenu = () =>
  <Wrapper className='startmenu'>
    <div className='logo'>
      <Logo />
      <h1>LIFT QUEST</h1>
    </div>
    <div className='content'>
      <pre>Press Enter Button</pre>
    </div>
  </Wrapper>

export default StartMenu