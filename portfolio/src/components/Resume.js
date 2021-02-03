import React from "react";

const Resume = (props) => {
  return (
    <div className="container resume__container">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science Engineering</h5>
            <p className="resume-card__name"></p>
            <p className="resume-card__details">Loremmm</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h4 className="resume-card__heading">Languages and Frameworks</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science Engineering</h5>
            <p className="resume-card__name"></p>
            <p className="resume-card__details">Loremmm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
