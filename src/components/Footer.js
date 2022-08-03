import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaMailBulk, FaTwitterSquare } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className='footer'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#001220" fill-opacity="1" d="M0,128L21.8,149.3C43.6,171,87,213,131,202.7C174.5,192,218,128,262,122.7C305.5,117,349,171,393,197.3C436.4,224,480,224,524,224C567.3,224,611,224,655,208C698.2,192,742,160,785,128C829.1,96,873,64,916,64C960,64,1004,96,1047,138.7C1090.9,181,1135,235,1178,266.7C1221.8,299,1265,309,1309,298.7C1352.7,288,1396,256,1418,240L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
                </svg>
                <div className="row justify-content-center footer-content">
                    <div className="col-md-6">
                        <div>
                            <p>Designed and developed by</p>
                            <hr />
                            <div className="d-flex justify-content-between px-3">
                                <FaInstagramSquare className='footer-icons' />
                                <FaFacebookSquare className='footer-icons' />
                                <FaTwitterSquare className='footer-icons' />
                                <FaLinkedin className='footer-icons' />
                                <FaMailBulk className='footer-icons' />
                                <FaGithubSquare className='footer-icons' />
                            </div>
                            <hr />
                            <br />
                            <p><em className='author'>Dashe Nungnaan Fate</em> @ Switch-Technologies &copy; 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer