import React from 'react';
import { FaBootstrap, FaCss3, FaHtml5, FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDjango, SiExpress, SiPython } from "react-icons/si";



function Courosel() {
    return (
        <>
            <div className="courosel-parent position-relative mt-0 py-0" id='courosel'>
                <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5 font-bold'>
                    My Tech Skills!
                </h1>
                <div className="gallery">
                    <span style={{ '--i': 1 }}><FaNode color='green' /></span>
                    <span style={{ '--i': 2 }}><FaNodeJs color='yellow' /></span>
                    <span style={{ '--i': 3 }}><SiExpress color='darkblue' /></span>
                    <span style={{ '--i': 4 }}><FaReact color='cyan' /></span>
                    <span style={{ '--i': 5 }}><SiPython color='blue' /></span>
                    <span style={{ '--i': 6 }}><SiDjango color='darkgreen' /></span>
                    <span style={{ '--i': 7 }}><FaHtml5 color='red' /></span>
                    <span style={{ '--i': 8 }}><FaCss3 color='blue' /></span>
                    <span style={{ '--i': 9 }}><FaBootstrap color='#7330F9' /></span>

                </div>
            </div>
        </>
    )
}

export default Courosel