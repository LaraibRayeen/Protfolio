import React from 'react'
import './Navbar.css'
import contact from '../Image/contact.png'

export const Contact = () => {
  return (
  
    <section id="Contect" className="contact m-2">
  <div className="container">
    <div className="row justify-content-between align-items-center">

    <div classNAme="h-50"  style={{ color:"white"}}>
            {" "}
            <h1> about me</h1>
            <h1> about me</h1>
          </div>
        
      <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
        {/* <span className="subtitle">Let's Say Hi</span> */}
        <h2>Hire Me.</h2>
        <div className="row call_details mb-4">
          <label className="col-sm-3">Call us directly:</label>
          <div className="col-sm-9 mb-3 mb-lg-2">
            <a href="tel:8874468890">8874468890</a>
          </div>
          <label className="col-sm-3">Contact Email:</label>
          <div className="col-sm-9 mb-3 mb-lg-2">
            <a href="mailto:Laraibrayeen123@gmail.com">Laraibrayeen123@gmail.com</a>
          </div>
        </div>
        <form action="https://formsubmit.co/laraibrayeen123@gmail.com" method="POST">
          <div className="mb-4">
            <input
             name='Name'
              type="text"
              className="form-control"
              placeholder="Your Name..."
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name='Phone'
              type="number"
              className="form-control"
              placeholder="Your Phone..."
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name='Email'
              type="email"
              className="form-control"
              placeholder="Your Email..."
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name='Message'
              cols={40}
              rows={4}
              className="form-control"
              id="message"
              placeholder="Write a Message..."
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className=" btn btn-outline-dark mylink" data-mdb-ripple-color="dark">
            Submit
          </button>
        </form>
      </div>
      <div className="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0">
        <img src={contact} className="img-fluid" alt='contact' />
      </div>
    </div>
  </div>
</section>

  )
}
export default Contact ;