import React from 'react'
import classes from './navigation.css'
import LaImg from '../images/la.jpg'
import Images from '../images/img.jpg'

import Contact from '../containers/contact.js'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

const navigation = (props) => {

    return(

        <div>

            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>

                </ol>


                <div className="carousel-inner">
                    <div className="item active">
                        <img src={LaImg}  className="images"/>
                        <div className="carousel-caption">

                            <h3>Amrit Kaur</h3>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row nav">
                <div className="col-lg-12">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid ">

                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#"><span className="glyphicon glyphicon-home"> </span>  Home</a></li>
                        <li><a href="#section_about">About</a></li>
                        <li><a href="#section_education">Education</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
                </div>
            </div>

        </div>

    )

}
export default navigation;