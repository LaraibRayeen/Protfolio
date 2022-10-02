import React from 'react'

export const Footer = () => {
  return(
      <>
      
        <footer className=" text-center ">
         
          <div className="container p-4">
           
            <section className="mb-4 ">
         
              <a
                href="https://www.linkedin.com/in/laraib-rayeen-5322381a9/"
                className="btn  text-center btn-floating m-1 "
              >
                <i className="fab fa-linkedin-in"></i>{" "}
              </a>
              <a
                href="https://github.com/LaraibRayeen"
                className="btn  text-center btn-floating m-1 "
              >
                <i className="fab fa-github" />
              </a>
            </section>
        
          </div>
        
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a
              className="text-dark"
              href="https://www.linkedin.com/in/laraib-rayeen-5322381a9/"
            >
              @Laraib
            </a>
          </div>
         
        </footer>
    
      </>
    
  );


  
}
export default Footer;