import React from 'react'
import classes from './footer.css'

const footer = (props) => {

    return(

       <div>
           <div className="row footer1">

               <div className="col-lg-offset-1 col-md-offset-2 col-sm-offset-2 col-lg-4 col-md-4 col-sm-4 col">

                   <i className="fa fa-map-marker loca1"></i>
                   <span className="span">21 Arrow Street,<br/></span>
                   <span className="span1">Brampton, ON.</span>
                   <br/><br/>

                   <i className="fa fa-phone phone1"></i>
                   <span className="span">1-888-987-1098</span><br/><br/>






               </div>

               <div className="col-lg-6 col-md-6 col-sm-6 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">
                   <h2 className="web">AROUND THE WEB</h2>


                         <a href="#" ><i className="fa fa-github-square github"></i>
                           <i className="fa fa-linkedin-square link"></i>
                             <i className="fa fa-google-plus-square mail1"></i></a>



               </div>


           </div>


       </div>
    );

}
export default footer;
