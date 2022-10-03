import React from "react";
import "./Navbar.css";

export const Project = () => {
  return (
    <div className="p-5 m-5  portfolio" id="Project">
      <div className="container">
        <div className="row">
        <div classNAme="h-50"  style={{ color:"white"}}>
            {" "}
            <h5> about me</h5>
          </div>
          <div classNAme="h-50" style={{ color:"white"}}>
            {" "}
            <h5> about me</h5>
          </div>
          <div classNAme="h-50" style={{ color:"white"}}>
            {" "}
            <h5> about me</h5>
          </div>
          <div className="col-sm-12 text-center md-4">
            {/* <span className="subtitle">My Complite project</span> */}
            <h2 className="m-3"> My Latest Project </h2>
          </div>
          {/* style="background-image:url()" */}
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 md-6 ">
            <div className="card   pt-4 m4-4 ">
           <h2 className="m-3"> Team Chatting App </h2>
              <p>
                Team chatting app is a web based application which allow
                authorized user's to create and join chat room.<br></br>
                <strong>* this  can help young people to become more effective non-verbal communicators.<br></br>
                *Reducing the need for face-to-face meetings.<br></br>
                *understand the difference between appropriate and inappropriate behaviour.
                </strong>

              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 md-6 ">
            <div className="card  pcard  p-3 ">
              <span className="pspan"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
