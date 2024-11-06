
import React from 'react'
import Sms1 from '../assets/sms.png'
import Sms2 from '../assets/pho.png'
import Sms3 from '../assets/sms.png'
import FORM from './kamsi/form'
import FOOTER from './kamsi/footer'
import rec1 from '../assets/Rectangle1.png'

function Contact() {
  return (
    <>
    <div className="mero text-light">
        <div className="container text-center pt-5">
           <h1 className='mt-2' style={{marginTop:'4px'}}>Contact</h1>
           <p>Home <i className='fa fa-arrow-right ms-3 me-3'></i> Contact</p>
        </div>
      </div> 
<div className="container"  data-aos="fade-up">
      <div className="row mt-5">
    <div className="col md-6">
        <h4>Kindly call us or join our support group on WhatsApp.</h4>
        <div className="d-flex mt-3">
          <div className=" me-2">
             <img src={Sms1} alt="" />  
          </div>
          <div className="ms-2">
             <h4>+234 8138734254</h4> 
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className=" me-2">
             <img src={Sms2} alt="" />  
          </div>
          <div className=" ms-2">
             <h4>+234 8138734254</h4> 
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className=" me-2">
             <img src={Sms3} alt="" />  
          </div>
          <div className=" ms-2">
             <h4>info@crystalshipment.com</h4> 
          </div>
        </div>
    </div>
    <div className="col md-6">
      <FORM />
    </div>
    </div>
  </div>
  
    </>
  )
}

export default Contact