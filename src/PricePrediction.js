import React, { Component } from 'react';
import "./priceprediction.css";

class PricePrediction extends Component {
    render() {
        return (
            <div className="section price-predictions" id="intro">
            <div className="black-fade"></div>  
            <div className="container">
        
                <div className="cover">
                      <div className="animation-wrapper">
                            <div className="sphere-animation" style={{ transform: "scale(0.833333)" }}>
                                
                                {/* sphere svg goes here */}
        
                    
                </div>
            </div>
        
        
                </div>
                
                <div className="text">
                    <h1>Enter the uncensorable internet</h1>
                    <p>We enable peer-to-peer, decentralized, censorship-resistant applications as layers on Bitcoin.</p>
                    <p>Using Fabric, we enable web scale, serverless infrastructure with strong privacy and security guarantees.</p>
                </div>
            
            </div> 
        </div>
        );
    }
}

export default PricePrediction;