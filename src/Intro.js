import React, { Component } from 'react';
import "./intro.css"
import Animm from "./animation.svg"


class Intro extends Component {
    render() {
        return (
            
            <div className="section intro" id="intro">
<div className="black-fade"></div>    
    
    <div className="container">
        
        <div className="text">
            <h1>Your Gateway To Uncensorable Applications</h1>
            <p>Portal Defi is a decentralized financial platform that blends the <br/>best of Bitcoin and Layer 2</p>

                    <div className="desc"> 
          <p className="small">With Portal, Decentralized finance becomes uncensorable, peer to peer, and trust minimized. Just like the underlying properties of Bitcoin. Portal swaps move provable execution of cross chain contracts to layers 2 and 3, which allows the speed and liquidity of centralized alternatives, with the trust minimization guarantees of Bitcoin. Moreover, transactions are much faster and cheaper than Layer 1 transactions.</p>
        </div>
        </div> 
        
        <div className="app">
            <div className="container">

  <section className="two" id="layer2" style={{ transform: "translateX(-30px)" }}>
    <div className="layer-container">
      <div className="layer functions">
            <p>Fabric Layer 2</p>

                                        <div className="anim">
                                            <img src={ Animm}  alt="fabric layer 2"/>

</div>
      </div>
    </div>
  </section>
  
  <section className="one" id="layer3" style={{ transform: "translateX(-50px)" }}>
    <div className="layer-container">
      <div className="layer map">
      <h2>Portal DeFi Apps</h2>
        <img src="/images/portal-app-wallet.jpg"/>
      </div>
    </div>
  </section>
  
  <section className="three" id="layer1" style={{ transform: "translateX(0px)" }}>
    <div className="layer-container">
      <div className="layer platforms">
        <img src="./images/btc.jpg"/>
      </div>
    </div>
  </section>

</div>
        </div>

    </div> 
    
</div>
        );
    }
}

export default Intro;