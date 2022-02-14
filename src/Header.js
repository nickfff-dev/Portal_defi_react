import React, { Component } from 'react';
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
            <div className="header-container">
              <div className="logo">
                <img src="https://portaldefi.com/assets/portal-logo.gif"/>
              </div>
              <div className="menu-container">
                <div className="menu-open">
                  <img src="https://portaldefi.com/assets/menu-open.svg"/> 
                </div>
                <div className="menu">
                  <div className="menu-close">
                    <img src="./images/menu-close.svg"/> 
                  </div>
                  <div className="tabs" id="website-menu">
                    <a href="/" className="selected">DeFi on Bitcoin</a>
                    <a href="/">Team</a>
                    <a href="/">Investors</a>
                    <a href="/">Press</a>
                    <a href="https://docs.google.com/forms/d/1k_D4mqssNjJ2x7feI19WMA8fzH2yNuyE-WLaMaxwKQY/edit?ts=6165db19" target="_blank">Ambassador</a>
                    <a href="https://docsend.com/view/pdk55ecxmuewiy8f" target="_blank"> Whitepaper</a>
                    <a href="https://twitter.com/portal_finance" target="_blank"><i className="fa-brands fa-twitter"></i> @portal_finance</a>
                  </div>
                  <a className="join" href="https://go.portaldefi.com/whitelist-homepage" target="_blank">Whitelist</a>
                </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Header;