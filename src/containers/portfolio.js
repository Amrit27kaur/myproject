import React,{Component} from 'react';
import classes from './portfolio.css'
import Images from "../images/img.jpg";
class Portfolio extends Component{

    render() {

        return (
            <div>
             <section className="about" id="section_about">
                <div className="row second_row_about">

                    <div className="col-lg-12">
                        <h1 className="About">About Me !!</h1>

                        <div className="row">
                            <div className="col-lg-offset-1 col-lg-3 image">
                                <img src={Images}  className="img-circle girl_image"/>
                            </div>
                            <div className="col-lg-7 col-lg-offset-1 writing">
                              <h2 className="heading">Hi, I'm Amrit Kaur</h2>
                                <p className="paragraph">I have always sought out opportunities and challenges that are meaningful
                                 to me. Although my professional path has taken many twists and turns but i have never stopped engaging my passion
                                to help others and solve problems.
                                    <br/>As a Application Developer(Mobile Web Specialist), i enjoy using my obsessive attention to detail,
                            my unequivocal love for making things and mission-driven work ethic to literally change the world. That's why I'm excited to make a big impact at a
                            high growth company.</p>

                                <div className="btn btn-primary button"><a href="/Resume.pdf" >Download Resume</a></div>
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

                        <h5 className="skill">HTML</h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40"
                                 aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                90%
                            </div>
                        </div>

                        <h5 className="skill">JavaScript</h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-info progress-bar-striped active"
                                  aria-valuemax="100" style={{width:'91%'}}>
                                91%
                            </div>
                        </div>

                        <h5 className="skill">C++</h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-warning progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'90%'}}>
                                90%
                            </div>
                        </div>

                        <h5 className="skill">C# and .Net</h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-danger progress-bar-striped active"
                                 aria-valuemax="100" style={{width:'85%'}}>
                                85%
                            </div>
                        </div>

                        <h5 className="skill">Java</h5>
                        <div className="progress pro_info">
                            <div className="progress-bar progress-bar-success progress-bar-striped active"
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