import React, { Component } from 'react'
import axios from 'axios';
export default class index extends Component {
    state={
        data:[]
    }
    render() {
        let {data}=this.state
        return (
            <>
            {
                data.map((item,index)=>{
                    return <div className="min-evey" key={index}>
                                <img src={item.img} alt=""/>
                                <div className="right">
                                    <div className="right-center">
                                        <h5>{item.name}</h5>
                                        {
                                            item.bool==="1"?<span>观众评 <h4>{item.score}</h4></span>:
                                            <span><h4>{item.score}</h4> 人想看</span>
                                        }
                                        
                                        <p>主演:{item.character}</p>
                                        {
                                            item.bool==="1"?<p>今天{item.home}家影院放映{item.site}场</p>:
                                            <p>{item.time}</p>
                                        }
                                        
                                    </div>
                                    {
                                        item.bool==="1"?<button className="buy">购买</button>:<button className="presell">预售</button>
                                    }
                                    
                                </div>
                            </div>
                })
            }
                
            </>
        )
    }
    componentDidMount(){
        axios.get("/data").then(res=>{
            this.setState({
                data:res.data.list
            })
        })
    }
}
