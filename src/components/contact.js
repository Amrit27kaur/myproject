import React,{Component} from 'react';
import classes from './contact.css'
import Images from '../images/map.jpg'

class Contact extends Component{

    render() {

        return (
            <div>
                <div className="col-lg-12 fcont"><h1 className="cont">Contact</h1>

                <div className="col-lg-offset-1 col-lg-3 first">

                    <h4>Email:-</h4>
                 <h5 >amrit23.sandhu@gmail.com</h5><br/>
                    <br/>


                    <h4>address:-</h4>
                    <h5>1 beaconcrest rd,l6y0y8.</h5><br/><br/>

                    <h4>Phone No.:-</h4>
                    <h5>3659981098</h5>

                </div>
                <div className="col-lg-7 col-lg-offset-1 lcont">

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
            </div>

        )
    }
}
export default Contact;