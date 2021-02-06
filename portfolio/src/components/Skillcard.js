import React from "react";

const Skillcard = (props) => {
  console.log();
  return (
    <div className="">
      <div className="skill-card">
        <img
          src={props.data.icon}
          alt="icon"
          className="skill-card__icon"
        ></img>
        <div className="skill-card-body">
          <h6 className="skill-card-title">{props.data.title}</h6>
          {/* <p className="skill-card__content">{props.data.about}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
