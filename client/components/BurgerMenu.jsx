import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


class BurgerMenu extends React.Component {

  state = {
    isShowing: false
  }

  clickBurgerHandler = (event) => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  render() {
    return (
      <nav>
        <div className="hamburger" onClick={this.clickBurgerHandler}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <ul className={"nav-links " + (this.state.isShowing && "open")}>
          <li><a href="#">Gulumirrgin Dictionary for Kids</a></li>
          <li><a href="#">Larrakia People</a></li>
          <li><a href="#">About </a></li>
        </ul>
      </nav>
    )
  }
}

export default BurgerMenu
