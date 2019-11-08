import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
    state={
        list:[],
        data:[]
    }
    render() {
        let {list,data}=this.state
        return (
            <>
                <div className="min-header">
                    <p>近期最受期待</p>
                    <div className="text-img">
                        {
                            list.map((item,index)=>{
                                return <div className="min-text-img" key={index}>
                                            <img src={item.img} alt=""/>
                                            <h5>{item.name}</h5>
                                            <span>{item.time}</span>
                                        </div>
                            })
                        }
                        
                    </div>
                </div>
                <div className="background">

                </div>
                {
                    data.map((item,index)=>{
                        return <div className="min-evey" key={index}>
                                <img src={item.img} alt=""/>
                                <div className="right">
                                    <div className="right-center">
                                        <h5>{item.name}</h5>
                                        <span><h4>{item.sum}</h4> 人想看</span>
                                        <p>主演:{item.character}</p>
                                        <p>{item.time}上映</p>
                                    </div>
                                    {
                                        item.bool==="0"?<button className="presell">预售</button>:<button className="think">想看</button>
                                    }
                                    
                                </div>
                            </div>
                    })
                }
                            
            </>
        )
    }
    componentDidMount(){
        axios.get("/list").then(res=>{
            this.setState({
                list:res.data.list,
                data:res.data.data
            })
        })
    }
}
