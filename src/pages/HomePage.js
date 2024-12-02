import React from "react";
import girlImage from "../images/girl.png";

const HomePage = () => (
  <div class="main-section min-vh-100">
    <div className="container homepage">
      <div class="color-block d-none d-lg-block"></div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-4 img-desktop-bg p-4 shadow d-none d-lg-block">
          <img src={girlImage} alt="Profile" className="w-100" />
        </div>
        <div className="col-lg-7 offset-lg-4 px-lg-4">
          <div className="img-mobile d-block d-lg-none text-center">
            <img src={girlImage} alt="Profile" />
          </div>
          <div className="p-lg-2 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
            <h1 className="position-relative mb-4">
              I'm Binita Shrestha
              <br /> <span className="designation">UI Developer</span>
            </h1>
            <p>
              My name is Binita Shrestha, a dedicated web designer with a strong
              passion for my craft. With 3 years of experience as a professional
              web developer, I’ve honed the skills and expertise needed to
              ensure the success of your projects. I truly enjoy each phase of
              the design process, from initial discussions to collaboration and
              execution.
            </p>
            <div class="w-100">
              <div class="about-client-box info-box">
                <div class="clients d-flex justify-content-between">
                  <div class="client-item text-center">
                    <h5>03</h5>
                    <p className="mb-0">Years Experience</p>
                  </div>
                  <div class="client-item text-center">
                    <h5>20+</h5>
                    <p className="mb-0">Total Projects</p>
                  </div>

                  <div class="client-item text-center">
                    <h5>20+</h5>
                    <p className="mb-0">Happy Clients</p>
                  </div>
                </div>
              </div>
              <a className="custom-btn mt-5" href="/about">
                <span className="text-uppercase">More about me</span>
                <div className="icon-box my-0">
                  <i className="bi-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
