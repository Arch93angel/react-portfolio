import React from 'react';
import Header from '../components/Header';

function Courses() {
  return (
    <div className='courses'>
      <Header />
      <div className="courses-intro"
        style={{ backgroundImage: `url('./courses.svg')` }}
      >
        <div className="courses-content font-bold ">

          <h1>Dashe Learnings</h1>
          <p>Still to come.. <br />
            Am working hard to get my permit to introduce you to the tech world!
          </p>
          <button className='primary-button font-bold disabled'>Check Courses ...</button>
        </div>
      </div>
    </div>
  )
}

export default Courses