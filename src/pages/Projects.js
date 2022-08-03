import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import Header from '../components/Header';
import projectsData from './Projectsdata';

function Projects() {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 p-5">
            <div data-aos="fade-down" >
              <h1 className='font-bold'>Projects</h1>
              <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi. Lorem ipsum dolor sit amet.</p>
              <button className='primary-button font-bold'><a href="#projects-list"> Get Started</a></button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0F62FE" d="M39.4,-63.5C51.1,-53.7,60.8,-43,67.9,-30.2C74.9,-17.4,79.4,-2.7,78.3,11.9C77.2,26.4,70.4,40.8,61.1,54.5C51.7,68.2,39.7,81.2,24.8,86.5C10,91.7,-7.7,89.1,-23.7,83.3C-39.7,77.4,-53.9,68.2,-62.9,55.7C-71.8,43.2,-75.5,27.3,-75.6,12.2C-75.8,-2.9,-72.4,-17.2,-67.2,-31.5C-62,-45.8,-54.9,-60,-43.3,-70C-31.8,-79.9,-15.9,-85.4,-1,-83.8C13.8,-82.2,27.6,-73.3,39.4,-63.5Z" transform="translate(100 100)" />
            </svg>
            <FaLaptopCode
              color='white'
              size='200'
              className='position-absolute top-50 start-50 translate-middle' />
          </div>
        </div>
      </div>
      <div className="container projects-list" id="projects-list">
        <h3 className='font-bold'>Take a look on my projects..</h3>
        <hr />
        <div className="row">
          {projectsData.map(project => {
            return <div className="col-md-4">
              <div className="position-relative project">
                <img className='img-thumbnail' src={project.image} alt="" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <hr />
                  <p>{project.description}</p>
                  <button className="primary-button">DEMO</button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects