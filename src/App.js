import React, { Component } from 'react';
import { TiThMenu } from "react-icons/ti";
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownView: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }


  toggleDropdown() {
    this.setState({dropdownView: !this.state.dropdownView});
  }


  render() {
    return (
      <div>
        <header className='top-container'>
        <nav>
          <div><img className='logo'src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='logo'/></div>
          <menu className='desktop-menu'>
            <ul>SERVICES</ul>
            <ul>PORTFOLIO</ul>
            <ul>ABOUT</ul>
            <ul>TEAM</ul>
            <ul>CONTACT</ul>
          </menu>
        </nav>
        <nav className='dropdown-nav'>
          <div className='dropdown' onClick={this.toggleDropdown}>MENU < TiThMenu className='menu-icon'/></div>
          {this.state.dropdownView
          ? (
            <menu className='mobile-menu'>
              <ul>SERVICES</ul>
              <ul>PORTFOLIO</ul>
              <ul>ABOUT</ul>
              <ul>TEAM</ul>
              <ul>CONTACT</ul>
            </menu>
          )
          : null}
        </nav>
        <section className='main-container'>
          <p className='sub-heading'>Welcome To Our Studio!</p>
          <h1 className="desktop-heading">IT'S NICE TO MEET YOU</h1>
          <h1 className="mobile-heading1">IT'S NICE TO MEET</h1>
          <h1 className="mobile-heading1" >YOU</h1>
          <button className='button-1'>TELL ME MORE</button>
        </section>
        </header>


      </div>
    )
  }
}

export default App;
