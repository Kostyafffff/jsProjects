import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'

import { NavLink, Route, Redirect, Switch} from 'react-router-dom';
import h1 from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/h1";
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
  state = {
      isLoggedIn: false
  }

  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                  to="/"
                  exact
                  activeClassName={'wfm-active'}
              >Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{
                  color: 'blue'
              }}>About</NavLink>
            </li>
            <li>
                <NavLink to={{
                    pathname: '/cars',
                    search: '?a=1&b=2',
                    hash: 'wfm-hash'
                }}>Cars</NavLink>
            </li>
          </ul>
        </nav>
        <hr/>

        <div style={{textAlign: 'center'}}>
            <h3>Is logged in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
            <button onClick={() => this.setState({isLoggedIn: true})}>Log in</button>
        </div>
        <hr/>
          {/*localhost:3000*/}
         <Switch>
            <Route path="/" exact component={() => <h1>Home Page</h1>}/>
            {this.state.isLoggedIn ? <Route path="/about" exact component={About}/> : null}
            <Route path="/cars" exact component={Cars}/>
            <Route path="/cars/:name" component={CarDetail}/>
            <Redirect to={'/'}/>
            {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>*/}
         </Switch>
      </div>
    );
  }
}

export default App
