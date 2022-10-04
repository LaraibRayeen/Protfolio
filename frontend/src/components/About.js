import React from "react";
import profile from "../Image/profile.png";
import "./Navbar.css";

const About = () => {
  return (
    <section id="About" className="about_wap m-5 p-5">
      <div className="container">
        <div className="row justify-content-between align-item-center">
          <div   style={{ color:"white"}}>
            {" "}
            <h1> about me</h1>
            <h1>b</h1>
          </div>
         

          <div className="col-lg-5 md-4 mb-lg-0">
            <img
              src={profile}
              className="img-fluid rounded-3 m-2"
              alt="about-us"
            ></img>
          </div>
          <div className=" col-lg-7 ps-lg-5 text-center text-lg-start">
            <div className="m-3 my-lg-0">
              {/* <span className="subtitle"> My About Detail </span> */}
              <h2> About Me</h2>
              <p>
                I am Full stack developer who loves designing and building
                products for the Web. I am tech enthusiast, Ever since I
                enrolled myself in Computer Engineering, I have been studying
                and upskilling myself constantly. I believe in learning and
                growing every single day.
              </p>
            </div>
            <div className="pt-4">
              <>
                <ul
                  className="nav nav-tabs mb-3 justify-content-center justify-content-lg-between"
                  id="myTab0"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home"
                      data-mdb-toggle="tab"
                      data-mdb-target="#home0"
                      type="button"
                      role="tab"
                      aria-controls="skill"
                      aria-selected="true"
                    >
                      <h6>Skills</h6>
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab0"
                      data-mdb-toggle="tab"
                      data-mdb-target="#profile0"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <h6>experience</h6>
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab0"
                      data-mdb-toggle="tab"
                      data-mdb-target="#contact0"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <h6>education</h6>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="certification-tab0"
                      data-mdb-toggle="tab"
                      data-mdb-target="#certification0"
                      type="button"
                      role="tab"
                      aria-controls="certification"
                      aria-selected="false"
                    >
                      <h6>certification</h6>
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent0">
                  <div
                    className="tab-pane fade show active"
                    id="home0"
                    role="tabpanel"
                    aria-labelledby="skill"
                  >
                    <div className="single-progress">
                      <h6 className="d-flex align-items-start">javascript</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      {/* <span className="label">80%</span> */}
                    </div>

                    <div className="single-progress">
                      <h6 className="d-flex align-items-start">c++</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      {/* <span className="label">75%</span> */}
                    </div>

                    <div className="single-progress">
                      <h6 className="d-flex align-items-start">React.js</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      {/* <span className="label">85%</span> */}
                    </div>
                    <div className="single-progress">
                      <h6 className="d-flex align-items-start">Node.js</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      {/* <span className="label">75%</span> */}
                    </div>
                    <div className="single-progress">
                      <h6 className="d-flex align-items-start">MongoDb</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      {/* <span className="label">80%</span> */}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile0"
                    role="tabpanel"
                    aria-labelledby="profile-tab0"
                  >
                    <ul className="text-start ps-0">
                      <li>
                        {" "}
                        <strong>Full stack web development internship</strong>
                        <div> Digipodium , Lucknow, UP. </div>
                        07/2022-8/2022
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact0"
                    role="tabpanel"
                    aria-labelledby="contact-tab0"
                  >
                    <ul className="text-start ps-0">
                      <li>
                        {" "}
                        <strong>
                          Computer Science And Engineering(B.Tech)
                        </strong>
                        <div>
                          {" "}
                          Rajarshi Rananjay Sinh Institute Of Management &
                          Technology , Amethi .{" "}
                        </div>
                        08/2019 – 07/2023
                      </li>
                      <li>
                        {" "}
                        <strong>12th science (state board)</strong>
                        <div> S.V.M. INTER COLLEGE </div>
                        06/2018 – 05/2019
                      </li>
                      <li>
                        {" "}
                        <strong>10th (state board)</strong>
                        <div> S.V.M. INTER COLLEGE </div>
                        6/2016–5/2017
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="certification0"
                    role="tabpanel"
                    aria-labelledby="certification-tab0"
                  >
                    <ul className="text-start ps-0">
                      <li>
                        {" "}
                        <strong>
                          {" "}
                          Developing Cloud App with Node.js and React- (IBM)
                        </strong>
                      </li>
                      <li>
                        {" "}
                        <strong>Communication– ( TCS ION)</strong>
                      </li>
                      <li>
                        {" "}
                        <strong>javascript– ( UDEMY)</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
