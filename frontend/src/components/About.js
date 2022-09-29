import React from "react";
import profile from "../Image/profile.png";
import "./Navbar.css";

const About = () => {
  return (
    <section id="about" className="about_wap m-5 p-5">
      <div className="comntainer">
        <div className="row justify-content-between align-item-center">
          <div className="col-lg-5 md-4 mb-lg-0">
            <img
              src={profile}
              className="img-fluid rounded-3 m-2"
              alt="about-us"
            ></img>
          </div>
          <div className=" col-lg-7 ps-lg-5 text-center text-lg-start">
            <div className="m-3 my-lg-0">
              <span className="subtitle"> My About Detail </span>
              <h2> About Me</h2>
              <p>
                I am Full stack developer who loves designing and building
                products for the Web. I am tech enthusiast,  Ever since I enrolled myself in Computer
                Engineering, I have been studying and upskilling myself
                constantly. I believe in learning and growing every single day.
              </p>
            </div>
            <div className="pt-4">
              <>
                <ul className="nav nav-tabs mb-3 justify-content-center justify-content-lg-between" id="myTab0" role="tablist">
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
                      Skills
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
                      experience
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
                      education
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
                    Tab 1 content.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile0"
                    role="tabpanel"
                    aria-labelledby="profile-tab0"
                  >
                    Tab 2 content
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact0"
                    role="tabpanel"
                    aria-labelledby="contact-tab0"
                  >
                    Tab 3 content
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
