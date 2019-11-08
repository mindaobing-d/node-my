import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        let code=localStorage.getItem("code")
        if(code==null){
            this.props.history.replace("/login")
        }
    }
}
