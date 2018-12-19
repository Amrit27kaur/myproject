import React from 'react'
import classes from './navigation.css'
import LaImg from '../images/la.jpg'

const navigation = (props) => {

    return(

        <div>

            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>

                </ol>


                <div className="carousel-inner">
                    <div className="item active">
                        <img src={LaImg} alt="Los Angeles" className="images"/>
                        <div className="carousel-caption">
                            <h3>Amrit Kaur</h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-12">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid nav">

                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </div>
            </nav>
                </div>
            </div>

        </div>

    )

}
export default navigation;