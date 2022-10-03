import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../Image/laraibLogo.jpg'
const Navbar = () => {
   let navbar = document.querySelectorAll(".nav-link")
   let navCollapse = document.querySelector(".navbar-collapse.collapse")
   navbar.forEach(function(a){
    a.addEventListener("click",function(){
      navCollapse.classList.remove("show")
    })
   })

     

  return (  
    <>
     
     <nav className="navbar navbar-expand-lg fixed-top mb-5  bg-light">
  <div className="container p-0 m-0">
    <a className="navbar-brand" href="#">
      <img src={logo} className="img-fluid w-75 h-auto d-inline-block"></img>
      
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fa-solid fa-bars-staggered"/>
    </button>
    <div className="collapse navbar-collapse justify-content-end text-sm-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item my-0  mx-2  position-relative ">
          <a className="nav-link active link-dark fs-5 mylink  h3  "   aria-current="page" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-item my-0  mx-2 position-relative">
          <a className="nav-link  link-dark fs-5  mylink h3" href="#About">
            About
          </a>
        </li>
        {/* <li className="nav-item my-0  mx-2 position-relative">
          <a className="nav-link link-dark fs-5 mylink  h3" href="#services">
            Services
          </a>
        </li> */}
        <li className="nav-item my-0  mx-2 position-relative">
          <a className="nav-link link-dark fs-5 mylink h3" href="#Project">
            Project
          </a>
        </li> 
        <li className="nav-item my-0  mx-2 position-relative">
          <a className="nav-link link-dark fs-5 mylink h3" href="#Contect">
            Contect
          </a>
        </li>
        {/* <li className="nav-item mt-4 mt-lg-0   mx-2">
          <a  type="button" className="btn btn-outline-dark mylink" data-mdb-ripple-color="dark" href="#">
            Hire me
          </a>
        </li>
        */}
      </ul>
    </div>
  </div>
</nav>

    
    </>    
  )
}
export default Navbar;
