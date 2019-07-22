import React from 'react'
import Wrapper from './style'

//components
import Menu from './menu'
//items
import Logo from '../../design/icons/liftquest'

class StartMenu extends React.Component {
  state = {
    active: 'press enter button',
    options: ['press enter button']
  }
  componentDidMount = () => {
    window.addEventListener('keyup', this.check_key)
  }
  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.check_key)
  }
  start = () => {
    if(this.state.active === 'press enter button') {
      this.setState({
        active: 'continue',
        options: ['continue', 'new game', 'about'],
      })
    } else {
      console.log(this.state.active)
    }
  }
  change_option = e => {
    console.log(e.key)
    this.setState({
      active: e.currentTarget.innerText
    })
  }
  update_active = inc => {
    let idx = this.state.options.indexOf(this.state.active)
    const max = this.state.options.length
    if(inc) {
      idx += inc
      if(idx > max - 1) idx = 0
      if(idx < 0) idx = max -1
      this.setState({
        active: this.state.options[idx]
      })
    }
  }
  check_key = e => {
    switch(e.key) {
      case 'Enter': this.start(); break;
      case 'ArrowDown': this.update_active(1); break;
      case 'ArrowUp': this.update_active(-1); break;
      default: console.log('nope')
    }
  }
  render = () =>
    <Wrapper className='start-menu'>
      <div className='logo'>
        <Logo />
        <h1>LIFT QUEST</h1>
      </div>
      <Menu data={this.state} click={this.check_for_enter} change={this.change_option}/>
    </Wrapper>
}

export default StartMenu