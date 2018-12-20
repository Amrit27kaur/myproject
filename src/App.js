
import React, { Component } from 'react';
import Footer from './components/footer.js'
import Navigation from './components/navigation.js'
import Portfolio from './containers/portfolio.js'
import Contact from './containers/contact.js'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div>

          <div className="row">
            <div className="col-lg-12">

              <Navigation/>
                <Portfolio/>

                <Footer/>
            </div>

          </div>
             <div className="row">
             <div className="col-lg-12 app">
                 <BrowserRouter>
                     <Contact/>
                 </BrowserRouter>
             </div>
             </div>


        </div>
    );
  }
}

export default App;