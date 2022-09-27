import React from 'react'
import './Navbar.css'
const Banner = () => {
  return (
   
    <section className="banner d-flex justify-content-center m-4" id="home">
  <div className="container ">
    <div className="row">
      <div className="col-sm-12 text-center text-md-start ">
        <h5> WELCOME TO MY WORLD </h5>
        <h1>
          {" "}
          i'm Laraib Rayeen <br />
          <span className='text-primary'> Full Stack Developer. </span>
          <br /> Based in INDIA 🕳.  {" "}
        </h1>
        
        <a  type="button" className="btn btn-outline-dark mylink" data-mdb-ripple-color="dark" href="#">
            Download Resume
          </a>
      </div>
    </div>
  </div>
</section>

  )
}
export default Banner 