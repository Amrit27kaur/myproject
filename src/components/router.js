import React, { Component } from 'react';


import Footer from './footer.js'
import Navigation from './navigation.js'
import Portfolio from '../containers/portfolio.js'


import {BrowserRouter} from 'react-router-dom'

import Contact from './contact'

class Router extends Component {
    render() {
        return (
            <div>

                    <div className="row">
                        <div className="col-lg-12">


                            <Navigation/>


                            <Footer/>
                        </div>

                    </div>


            </div>
        );
    }
}

export default Router;