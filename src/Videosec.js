import React, { Component } from 'react';
import "./videosec.css";
import { Embed } from 'semantic-ui-react'
import embeddata from './embedyoutube';

class Videosec extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            dataforembed: embeddata
        }
    }

    render() {
        return (
            <div className="section video-section" id="videos">
            <div className="black-fade"></div> 
            <div className="container">
        
                <h3>Video Gallery</h3>
                
        
                <div className="breweries">
                    <ul>
                        {this.state.dataforembed.map((embedy, index)=>{
  return (
      <li key={index}>  <Embed key={index} id={embedy.id} placeholder= {embedy.placeholder} source='youtube' width="100%" height="200" className= "embed-youtube"/><p key= {index}>{embedy.title}</p> </li>)})}
        
                    </ul>
                </div>
        
            </div>
        </div>
        );
    }
}

export default Videosec;