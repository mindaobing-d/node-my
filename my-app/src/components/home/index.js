import React, { Component } from 'react'
import { NavLink,Switch } from 'react-router-dom'
import RouterView from '../../router/routerView';
export default class index extends Component {
    render() {
        let {child}=this.props
        return (
            <div className="evey">
                <div className="tab">
                    <NavLink to="/index/home/being">正在热映</NavLink>
                    <NavLink to="/index/home/soon">即将上映</NavLink>
                </div>
                <div className="evey-move">
                    <Switch>
                        <RouterView router={child}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
