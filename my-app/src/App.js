import React, { Component } from 'react'
import router from './router/routerJson';
import RouterView from './router/routerView';
import { BrowserRouter} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <RouterView router={router}/>
      </BrowserRouter>
    )
  }
}
