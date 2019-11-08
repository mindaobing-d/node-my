import React, { Component } from 'react'
import { NavLink,Switch } from 'react-router-dom'
import RouterView from '../router/routerView';
export default class index extends Component {
    state={
        head:"猫眼电影"
    }
    render() {
        let {child}=this.props
        let {head}=this.state
        return (
            <div className="context">
                <header>{head}</header>
                <main>
                    <Switch>
                        <RouterView router={child}/>
                    </Switch>
                </main>
                <footer>
                    <NavLink onClick={this.chnage.bind(this)} to="/index/home">电影</NavLink>
                    <NavLink onClick={this.chnage.bind(this)} to="/index/move">影院</NavLink>
                    <NavLink onClick={this.chnage.bind(this)} to="/index/my">我的</NavLink>
                </footer>
            </div>
        )
    }
    chnage(e){
        let text=e.target.innerText
        if(text==="电影"){
            this.setState({
                head:"猫眼电影"
            })
        }else if(text==="影院"){
            this.setState({
                head:"影院"
            })
        }else{
            this.setState({
                head:"个人中心"
            })
        }
    }
}
