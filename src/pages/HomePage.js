import React from "react";
import girlImage from "../images/girl.png";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
            <h1 className="position-relative mb-2">
              I'm Binita Shrestha
              <br /> <span className="designation">UI Developer</span>
            </h1>
            <p className="mb-4">
              Hi, I’m Binita Shrestha, a UI developer passionate about creating user-friendly interfaces. With 3 years of experience in web development, I’ve gained the skills needed to deliver successful projects. I enjoy every step of the process, from brainstorming and collaboration to executing the final product. Feel free to explore my work and get in touch!
            </p>
            <div class="w-100">
              <div class="about-client-box info-box mb-5">
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

              <Link to="/about" className="custom-btn">
                <span className="text-uppercase">More about me</span>
                <div className="button-warning icon-box my-0">
                  <FaArrowRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
