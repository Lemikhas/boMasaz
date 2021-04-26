import React from 'react'
import Link from 'gatsby-link'

const Header = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        active: false,
        navBarActiveClass: '',
      }
    }
  
    toggleHamburger = () => {
      // toggle the active boolean in the state
      this.setState(
        {
          active: !this.state.active,
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.active
            ? this.setState({
                navBarActiveClass: 'is-active',
              })
            : this.setState({
                navBarActiveClass: '',
              })
        }
      )
    }
  
render() {
    return (
        <header id="header">
            <img src="img/logo_transp.png" alt="logo" id="header-logo"/>
            <span 
                id="menu-icon"
                onClick={() => this.toggleHamburger()}
            >
                {this.state.active && 
                    <i className='fas fa-times'></i>
                }
                {!this.state.active && 
                    <i className="fas fa-bars"></i>
                }
                
            </span>
            <menu 
                id="menu-box"
                className={`${this.state.navBarActiveClass}`}
            >
                <ul id="menu">
                    <Link to="/#contact-container" onClick={() => this.toggleHamburger()}><li className="menu-item">KONTAKT</li></Link>
                    <Link to="/#oferta-container" onClick={() => this.toggleHamburger()}><li className="menu-item">OFERTA</li></Link>
                    <Link to="/#cennik-container" onClick={() => this.toggleHamburger()}><li className="menu-item">CENNIK</li></Link>
                    <Link to="/blog" onClick={() => this.toggleHamburger()}><li className="menu-item">BLOG</li></Link>
                </ul>
            </menu>
        </header>
        )
    }
}

export default Header
