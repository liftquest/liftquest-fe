import React from 'react'
import {withRouter} from "react-router-dom";
import Wrapper from './style'

//components
import Menu from './menu'
//items
import Logo from '../../design/icons/liftquest'

class StartMenu extends React.Component {
  state = {
    active: 'start',
    options: [{route: '/start', text: 'press enter button', name: 'start'}]
  }
  componentDidMount = () => {
    window.addEventListener('keyup', this.check_key)
  }
  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.check_key)
  }
  enter = () => {
    if(this.state.active === 'start') {
      this.setState({
        active: 'login',
        options: [
          {route: '/login', text: 'continue', name: 'login'},
          {route: '/signup', text: 'new game', name: 'signup'},
          {route: '/about', text: 'about', name: 'about'}
        ]
      })
    } else {
      this.props.history.push(this.state.active)
    }
  }
  change_option = e => {
    this.setState({
      active: e.currentTarget.getAttribute('name')
    })
  }
  update_active = inc => {
    let idx = this.state.options.findIndex(options => options.name === this.state.active)
    const max = this.state.options.length
    if(inc) {
      idx += inc
      if(idx > max - 1) idx = 0
      if(idx < 0) idx = max -1
      this.setState({
        active: this.state.options[idx].name
      })
    }
  }
  check_key = e => {
    switch(e.key) {
      case 'Enter': this.enter(); break;
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
      <Menu data={this.state} click={this.enter} change={this.change_option}/>
    </Wrapper>
}

export default withRouter(StartMenu)