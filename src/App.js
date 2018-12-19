
import React, { Component } from 'react';

import Navigation from './components/navigation.js'
import Portfolio from './containers/portfolio.js'

class App extends Component {
  render() {
    return (
        <div>

          <div className="row">
            <div className="col-lg-12">

              <Navigation/>
                <Portfolio/>
            </div>

          </div>



        </div>
    );
  }
}

export default App;