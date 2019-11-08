import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
    state={
        bool:true,
        dengName:"",
        dengPass:"",
        regName:"",
        regPass:""
    }
    render() {
        let {bool,dengName,dengPass,regName,regPass}=this.state
        return (
            <div className="context">
                <div className="header">
                    <span onClick={this.regression.bind(this)}>←</span>
                    <p>猫眼电影</p>
                </div>
                <div className="login" onClick={this.tab.bind(this)}>
                    <span className={bool?"active":""}>美团账号登录</span>
                    <span className={bool?"":"active"}>美团账号注册</span>
                </div>
                {
                    bool?<div className="deng">
                        <input type="text" value={dengName} onChange={this.change.bind(this)} placeholder="请输入账号"/>
                        <input type="text" value={dengPass} onChange={this.change.bind(this)} placeholder="请输入密码"/>
                        <button onClick={this.ok.bind(this)}>登入</button>
                    </div>
                    :<div className="register">
                    <input type="text" value={regName} onChange={this.change.bind(this)} placeholder="请输入要注册的账号"/>
                    <input type="text" value={regPass} onChange={this.change.bind(this)} placeholder="请输入要注册的密码"/>
                    <button onClick={this.ok.bind(this)}>注册</button>
                    </div>
                }
            </div>
        )
    }
    componentDidMount(){
        
    }
    ok(e){
        let {dengPass,dengName,regPass,regName}=this.state
        let text=e.target.innerText
        let deng=/^[\u4E00-\uFA29]|[\uE7C7-\uE7F3]{,16}$/
        let pass=/^.*(?=.{6,16})(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).*$/
        if(text==="登入"){
            if(pass.test(dengPass)&&deng.test(dengName)){
                axios.post(`/deng?name=${dengName}&&pass=${dengPass}`).then(res=>{
                    console.log(res.data)
                })
            }else{
                console.log("请输入正确的账号或密码")
            }
        }else{
            if(pass.test(regPass)&&deng.test(regName)){
                axios.post(`/create?name=${regName}&&pass=${regPass}`).then(res=>{
                    console.log(res.data)
                })
            }else{
                console.log("必须有一个小写字母,一个数字,一个特殊字符,最少6个,最多16")
            }
        }
    }
    change(e){
        let text=e.target.placeholder
        let value=e.target.value
        if(text==="请输入账号"){
            this.setState({
                dengName:value
            })
        }else if(text==="请输入密码"){
            this.setState({
                dengPass:value
            })
        }else if(text==="请输入要注册的账号"){
            this.setState({
                regName:value
            })
        }else if(text==="请输入要注册的密码"){
            this.setState({
                regPass:value
            })
        }
    }
    tab(e){
        if(e.target.innerText==="美团账号登录"){
            this.setState({
                bool:true
            })
        }else{
            this.setState({
                bool:false
            })
        }
    }
    regression(){
        this.props.history.go(-1)
    }
}
