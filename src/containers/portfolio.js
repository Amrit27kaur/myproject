import React,{Component} from 'react';
import classes from './portfolio.css'
import Images from "../images/img.jpg";
import Images1 from "../images/edu.jpg";
import {Animated} from "react-animated-css";

class Portfolio extends Component{

    render() {

        return (
            <div>
             <section className="about second" id="section_about">
                <div className="row second_row_about">

                    <div className="col-lg-12">
                        <h1 className="About">About Me !!</h1>

                        <div className="row">
                            <div className="col-lg-offset-1 col-lg-3 image">
                                <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
                                    <img src={Images}  className="img-circle girl_image"/></Animated>
                            </div>
                            <div className="col-lg-7 col-lg-offset-1 writing">


                                <div className="panel">
                                <div className="panel panel-default">

                                    <div className="panel-body paragraph">I have always sought out opportunities and challenges that are meaningful
                                        to me. Although my professional path has taken many twists and turns but i have never stopped engaging my passion
                                        to help others and solve problems.
                                        <br/>As a Application Developer(Mobile Web Specialist), i enjoy using my obsessive attention to detail,
                                        my unequivocal love for making things and mission-driven work ethic to literally change the world. That's why I'm excited to make a big impact at a
                                        high growth company.</div>
                                </div>
                                </div>

                                <div className="personal-information ">
                                    <h3 className="personal_infor">Personal Information</h3>

                                        <li className="border"><span>Name : </span>Amrit Kaur</li>
                                        <li className="border"><span>Age : </span>26 Years</li>
                                        <li className="border"><span>Phone : </span>+01254689</li>
                                        <li className="border"><span>Email : </span>amrit@gmail.com</li>
                                        <li className="border"><span>Address : </span>Brampton,ON</li>

                                </div>

                                <a href="/Amrit_Resume.pdf" class="waves-effect waves-light btn-large resume-btn" >
                                <i className="mdi-content-archive left"></i>
                                    Download Resume</a>


                            </div>
                        </div>
                    </div>

              </div>
             </section>

                <section id="section_education">
                <div id = "section_eduaction">
                <div className="row third_row_education">

                    <div className="col-lg-12">
                        <h1 className="Education">My Skills</h1>

                        <h5 className="skill"><strong>HTML, CSS & BootStrap</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40"
                                 aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                100%
                            </div>
                        </div>


                        <h5 className="skill"><strong>C, C++</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-warning progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                90%
                            </div>
                        </div>

                        <h5 className="skill"><strong>C# and .Net</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-danger progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'85%'}}>
                                85%
                            </div>
                        </div>

                        <h5 className="skill"><strong>Java</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-success progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                90%
                            </div>
                        </div>

                        <h5 className="skill"><strong>JQuery & JavaScript</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-info progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                90%
                            </div>
                        </div>

                        <h5 className="skill"><strong>JSON, Linux and Apache</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-warning progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                90%
                            </div>
                        </div>

                        <h5 className="skill"><strong>PHP, Laravel</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-success progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                85%
                            </div>
                        </div>

                        <h5 className="skill"><strong>WordPress</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-danger progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                95%
                            </div>
                        </div>

                        <h5 className="skill"><strong>SQL/TSQL, XML</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-success progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                90%
                            </div>
                        </div>

                        <h5 className="skill"><strong>Android, SQLite</strong></h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-info progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                90%
                            </div>
                        </div>

                    </div>

                </div>
                </div>
                </section>



            </div>

        )
    }
}
export default Portfolio;