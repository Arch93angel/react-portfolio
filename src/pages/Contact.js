import React from 'react';
import Header from '../components/Header';

function Contact() {
  return (
    <div>
      <Header />
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5" data-aos="fade-right">
            <img src="./background.jpeg" alt="" />
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <div className="contact-form m-4 p-5 n-box2">
              <h3 className='font-bold'>Contact Me</h3>
              <hr />
              <input className='form-control' type="text" placeholder='full name' />
              <input className='form-control' type="email" placeholder='email' />
              <textarea name="message" id="message" className='form-control' rows="5"></textarea>
              <button className='primary-button mt-3'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact