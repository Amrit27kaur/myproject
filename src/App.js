
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Footer from './components/footer.js'
import Navigation from './components/navigation.js'
import Portfolio from './containers/portfolio.js'
import Router from './components/router.js'



import {BrowserRouter} from 'react-router-dom'



class App extends Component {
  render() {
    return (
        <div>

          <BrowserRouter>
<Router/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;