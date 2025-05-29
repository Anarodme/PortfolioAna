import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">+1 years working</span>
      </div>

      <div className="about__box">
        <i class="bx bx-map-pin about__icon"></i>

        <h3 className="about__title">Location</h3>
        <span className="about__subtitle">Costa Rica</span>
      </div>

      <div className="about__box">
        <i class="bx bx-conversation about__icon"></i>

        <h3 className="about__title">Languages</h3>
        <span className="about__subtitle">+2</span>
      </div>
    </div>
  );
};

export default Info;
