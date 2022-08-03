import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuRightAlt, CgClose } from "react-icons/cg";


function Header() {
    const [showHeader, setShowHeader] = useState(false)
    const path = window.location.pathname
    return (
        <div className="header">
            {showHeader ? (
                <CgClose
                    onClick={() => { setShowHeader(!showHeader) }}
                    className='menu-icon position-fixed top-0 end-0' />
            ) : (
                <CgMenuRightAlt
                    onClick={() => { setShowHeader(!showHeader) }}
                    className='menu-icon position-fixed top-0 end-0' />
            )}
            <ul className={`${showHeader ? "show-header" : "hide-header"} n-box1`}>
                <li className={`${path === '/' && 'active'}`}><Link to={'/'}>Home</Link></li>
                <li className={`${path === '/projects' && 'active'}`}><Link to={'/projects'}>Projects</Link></li>
                <li className={`${path === '/courses' && 'active'}`}><Link to={'/courses'}>Courses</Link></li>
                <li className={`${path === '/contact' && 'active'}`}><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header