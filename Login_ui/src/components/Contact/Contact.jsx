
import imgSrc from '../logos/image.png';
import  './custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
import {Container} from 'react-bootstrap'
function Contact() {
  return(
     <div>
      <img src={imgSrc} alt="Image" style={{width: '1300px',height:'75%'}}/>
      <Container>
        <h1 className='text-center'>Contact Us</h1>
        <div className="contact-us-container">
      <div className="contact-details">
        <div className="contact-detail">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <div className="contact-info">
            <h3><i>Phone No. :</i></h3>
            <p>01-5912727</p> 
          </div>
        </div>
        <div className="contact-detail">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <div className="contact-info">
            <h3><i>Email:</i></h3>
            <p>info@achsnepal.edu.np</p>
          </div>
        </div>
        <div className="contact-detail">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <div className="contact-info">
            <h3><i>Address:</i></h3>
            <p>Ekantakuna,Near Alka Hospital 2,Lalitpur,Nepal</p>
          </div>
        </div>
      </div>
    </div>
        <div className="singlecol d-flex justify-content-evenly">
      
         <a href="https://facebook.com"></a>
         <FontAwesomeIcon icon={faFacebook} />
        
         <a href="https://instagram.com"></a>
         <FontAwesomeIcon icon={faInstagram} />

         <a href="https://twitter.com"></a>
         <FontAwesomeIcon icon={faTwitter} />
       </div>
       </Container>
    </div>
         
  );
}

export default Contact;



 
