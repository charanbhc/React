import React, { Component } from 'react'


export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
    render(){
        return(
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>count - {this.state.count}</button>
        )
    }
}