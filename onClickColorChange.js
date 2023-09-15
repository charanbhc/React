import React, { Component } from 'react'
export default class ColorChanges extends Component {
    constructor(props){
        super(props)
        this.state={color:"Red"}
    }
    handleColor=()=>{this.setState({color:"Green"})}
    handleColor1=()=>{this.setState({color:"Blue"})}
    handleColor2=()=>{this.setState({color:"Cyan"})}
        render(){
            return(
                <h1 onMouseOver={this.handleColor}
                onMouseOut={this.handleColor1}
                onClick={this.handleColor2}
                style = {this.state}>Hello world</h1>
            )
        }
    }