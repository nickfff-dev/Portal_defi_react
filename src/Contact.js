import React, { Component } from 'react';
import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <div className="section institutions" id="institutions">
    
    <div className="container">
      
      
        
        <h1>Contact Us</h1>
                
        <form id="contact-form">
            <input className="field" type="text" placeholder="Email address (required)" style={{marginRight: "4px"}} name="EMAIL"/>
            <input className="field" type="text" placeholder="Subject" name="SUBJECT"/>
            <textarea placeholder="Message (required)" name="MESSAGE"></textarea>
            <input type="submit" className="submit" value="Contact us"/>
        </form>
    
    
    </div>
    
</div>
        );
    }
}

export default Contact;