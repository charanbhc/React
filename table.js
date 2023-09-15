import React, { Component } from 'react'


export default class Table extends Component {
    constructor(props){
        super(props)
        this.state=[{id:101,name:"kapil",age:21},{id:102,name:"saipavan",age:21},{id:103,name:"charan",age:20}]
    }
        render(){
            return(
                <div>
                    <table>
                        <tr>{Object.keys(this.state[0]).map((x)=>(<th>{x}</th>))}</tr>
                            {this.state.map((obj)=>(<tr>{Object.values(obj).map((y)=>(<td>{y}</td>))}</tr>))}
                    </table>
                </div>
            )
        }
    }