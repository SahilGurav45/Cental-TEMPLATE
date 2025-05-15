import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
     <div className="container-fluid ">
    <div className="row">
      <div className="col-lg-6 information d-none d-md-block">
      <i className="bi bi-geo-alt-fill"><span className='information-text'>Pune ,Maharashtra</span></i>
      <i className="bi bi-telephone-fill"><span className='information-text'>+911234567890</span></i>
      <i className="bi bi-envelope-open-fill"><span className='information-text'>sahilgurav47@gmail.com</span></i>
      </div>
      <div className="col-lg-6 information_png d-flex justify-content-center ">
      <i className="bi bi-facebook"></i>
      <i className="bi bi-twitter"></i>
      <i className="bi bi-instagram"></i>
      <i className="bi bi-linkedin"></i>
      </div>
    </div>
   </div>
  )
}

export default Hero
