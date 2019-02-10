import React,{Component} from 'react';
import classes from './contact.css'
import Images from '../images/map.jpg'

class Contact extends Component{

    render() {

        return (
           <div>

                   <div className="row fcont">
                       <h1 className="cont">Contact</h1>
                       <div className=" col-lg-4 first">

                           <i className="fa fa-map-marker loca"
                              ></i>
                           <span className="spn">21 Arrow Street,<br/></span>
                           <span className="spn1">Brampton, ON.</span>
                            <br/><br/>

                           <i className="fa fa-phone phone"></i>

                           <span className="spn">1-888-987-1098</span><br/><br/>


                           <i className="fa fa-envelope-open mail">
                             </i>
                           <span className="spn">amrit.....@gmail.com</span>


                       </div>
                       <div className="col-lg-8 lcont">

                           <form>
                               <div className="col-xs-6">
                                   <input className="form-control" placeholder="Name"/>
                               </div><br/><br/><br/>



                               <div className="col-xs-6">
                                   <input className="form-control" placeholder="Email"/>
                               </div><br/><br/><br/>

                               <div className="col-xs-6">
                                   <input className="form-control" placeholder="Phone Number"/>
                               </div><br/><br/><br/>
                               <div className="col-xs-6">
                        <textarea rows="4" cols="50" className="form-control" placeholder="Message">
                          </textarea>
                               </div><br/>
                               <br/><br/>

                               <div className="btn btn-primary">Send</div>

                           </form>
                       </div>
                   </div>

               <div className="row">
                   <div className=" col-sm-12 map ">
                       <img src={Images} className="map.jpg img"/>
                   </div>
               </div>
               </div>

        )
    }
}
export default Contact;