import React from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


class BurgerMenu extends React.Component {

    state = {
      isShowing: false
    }

    clickBurgerHandler = (event) => {
      console.log("clicked")
      this.setState({
        isShowing: !this.state.isShowing
      })
    }

    render () {
      console.log(this.state.isShowing)

        // const hamburger = document.querySelector('.hamburger');
        // const navLinks = document.querySelector('.nav-links');
        // const links = document.querySelectorAll('.nav-links li');

        // hamburger.addEventListener("click", () => {
        //     navLinks.classList.toggle("open");
        //     links.forEach(link =>{
        //         link.classList.toggle("fade");
        //     });
        // });
    
                       
        return (
            <body>
    <nav>
      <div class="hamburger" onClick={this.clickBurgerHandler}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      
      <ul class="nav-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Larrakia People</a></li>
        <li><a href="#">Gulumirrgin Dictionary for Kids</a></li>
      </ul>
    </nav>

    <section class="landing">
    <h1>Hello World</h1>
    </section>

    <script src="app.js"></script>
  </body>
 
        )


    }

}


export default BurgerMenu