import React from 'react';
import Courosel from '../components/Courosel';
import Header from '../components/Header';


function Home() {
  return (
    <div>
      <Header />
      <div className="introduction flex-with-center" style={{ backgroundImage: `url('./introbg.svg')` }}>
        <div>
          <h1>D.N. FATE</h1>
          <div className="intro-content d-flex justify-content-between ">
            <p>MERN Stack <br />Developer, Data Analyst</p>
            <button className="primary-button font-bold">Get Started</button>
          </div>
        </div>
      </div>
      <Courosel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#001220" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,154.7C192,117,240,75,288,85.3C336,96,384,160,432,192C480,224,528,224,576,208C624,192,672,160,720,176C768,192,816,256,864,277.3C912,299,960,277,1008,266.7C1056,256,1104,256,1152,229.3C1200,203,1248,149,1296,128C1344,107,1392,117,1416,122.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-start ">
          <div className="col-md-4">
            <div className='n-box2 p-5 font-bold'>
              <h1>Yes you are right...</h1>
              <br />
              <p>I am a fullstack developer...</p>
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img src="../IMG_2076.jpeg" alt="" height="300" className="w-100 img-fluid img-thumbnail" />
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className='n-box2 p-5 font-bold'>
              <p>Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate web development domains: the front end and the back end.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="devstack container mt-5 n-box2 py-5">
        <div className="text-center">
          <h3 className="font-bold text-center">My Development Stack</h3>
          <hr />
          <img
            className="img-fluid img-thumbnail"
            src="./fullstack.gif" alt="" height="300" width="300" />
        </div>
        <div className="row mt-5 px-5">
          <div className="col-md-3">
            <div className='font-bold text-center'>
              <h3 className='font-bold'>Front-End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>EJS</p>
              <p>React</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className='font-bold text-center'>
              <h3 className='font-bold'>UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Bootstrap</p>
              <p>Material UI</p>
              <p>AntDesign</p>
              <p>Semantic UI</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className='font-bold text-center'>
              <h3 className='font-bold'>Data Analysis</h3>
              <hr />
              <p>MicroSoft Excel</p>
              <p>Pandas</p>
              <p>Streamlit</p>
              <p>SPSS</p>
              <p>Stata</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className='font-bold text-center'>
              <h3 className='font-bold'>Back-End/DB</h3>
              <hr />
              <p>Python</p>
              <p>Nodejs</p>
              <p>Express</p>
              <p>Django/Flask</p>
              <p>SQL</p>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
      <div className='font-bold mt-5 text-center'>
        <h3>Who am i?</h3>
        <div className="who-i-am flex-with-center" style={{ backgroundImage: `url('/whoblob.svg')` }}>
          <div>
            <h1>Hi, and Hello...</h1>
            <hr />
            <p><pre>{JSON.stringify({
              name: "Dashe Nungna'an Fate",
              from: {
                country: "Nigeria",
                origin: {
                  state: "Jos, Plateau",
                  lga: "Qua-an Pan",
                }
              },
              age: null,
              gender: "Male"
            }, null, 2)}</pre></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home