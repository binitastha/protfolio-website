import React from 'react';
import girlImage from './images/girl.png'; 



function ProfileSection() {
  return (
    <div className="container">
      <div class="color-block d-none d-lg-block"></div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-4 img-desktop-bg p-4 shadow d-none d-lg-block">
        <img src={girlImage} alt="Profile" className="w-100" />

        </div>
        <div className="col-lg-8 offset-lg-4 px-lg-4">
          <div className="img-mobile d-block d-lg-none text-center">
          <img src={girlImage} alt="Profile" className="w-100" />

          </div>
          <div className="p-lg-4 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
            <h1 className="position-relative">
              I'm Binita Shrestha. v1<br /> <span className="text-white">UI Developer</span>
            </h1>
            <p className="text-white">
              My name is Binita Shrestha. I am a professional web designer, and I'm very passionate and
              dedicated to my work. With 3 years experience as a professional Web developer, I have acquired the
              skills and knowledge necessary to make your project a success. I enjoy every step of the design
              process, from discussion and collaboration.
            </p>
            <button className="custom-btn d-flex align-items-center">
              <span className="text-white text-uppercase">More about me</span>
              <div className="icon-box my-0">
                <i className="bi-arrow-right"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
