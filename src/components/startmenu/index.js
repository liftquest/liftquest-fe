import React from 'react'
import {withRouter} from "react-router-dom";
import Wrapper from './style'

//components
import Menu from './menu'
//items
import Logo from '../../design/icons/liftquest'

class StartMenu extends React.Component {
  state = {
    active: '/start',
    options: [{route: '/start', text: 'press enter button'}]
  }
  componentDidMount = () => {
    window.addEventListener('keyup', this.check_key)
  }
  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.check_key)
  }
  start = () => {
    if(this.state.active === '/start') {
      this.setState({
        active: '/login',
        options: [
          {route: '/login', text: 'continue'},
          {route: '/signup', text: 'new game'},
          {route: '/about', text: 'about'}
        ]
      })
    } else {
      this.props.history.push(this.state.active)
    }
  }
  change_option = e => {
    this.setState({
      active: e.currentTarget.name
    })
  }
  update_active = inc => {
    let idx = this.state.options.findIndex(options => options.route === this.state.active)
    const max = this.state.options.length
    if(inc) {
      idx += inc
      if(idx > max - 1) idx = 0
      if(idx < 0) idx = max -1
      this.setState({
        active: this.state.options[idx].route
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

export default withRouter(StartMenu)