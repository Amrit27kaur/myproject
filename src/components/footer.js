import React from 'react'
import classes from './footer.css'

const footer = (props) => {

    return(

       <div>
           <div className="row footer1">
               <div className="col-lg-offset-1 col-lg-4">
                   <h1 className="loc">LOCATION</h1>
                   <span className="add">1 Beaconcrest road,<br/> </span><span className="add1"> Brampton, L6y0y8.</span>

               </div>

               <div className="col-lg-6 col-lg-offset-1">
                   <h1 className="web">AROUND THE WEB</h1>
                   <li className="list-inline-item">
                       <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                           <i className="fa fa-facebook-square fb"><a href="https://www.facebook.com/"></a> </i>

                          <i className="	fa fa-github-square github"></i>
                           <i className="	fa fa-linkedin-square link"></i>
                       </a>
                   </li>

               </div>


           </div>

           <div className="row footer2">
               <div className="col-lg-12">
                   <span className="f2"><strong>Copyright © Your Website 2018</strong></span>
           </div>
       </div>
       </div>
    );

}
export default footer;
