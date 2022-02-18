import React, { Component } from 'react';
import "./contact.css";

class Contact extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (event) => { 
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    


    render() {
        return (
            <div className="section institutions" id="institutions">
    
    <div className="container">
      
      
        
        <h1>Contact Us</h1>
                
        <form id="contact-form">
            <input className="field" type="text" onChange={this.handleChange} placeholder="Email address (required)" style={{marginRight: "4px"}} value={this.state.name} name="email"/>
            <input className="field" type="text" onChange={this.handleChange} placeholder="Subject" value={this.state.subject} name="subject"/>
            <textarea placeholder="Message (required)" onChange={this.handleChange} value={this.state.name} name="message"></textarea>
            <input type="submit" className="submit" value="Contact us"/>
        </form>
    
    
    </div>
    
</div>
        );
    }
}

export default Contact;