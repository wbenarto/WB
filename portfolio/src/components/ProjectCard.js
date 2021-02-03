import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card col-md-6 col-lg-4">
      <figure className="project-card__wrapper">
        <a href={"#"} target="_blank">
          <img src={"#"} alt={"alt"} className="project-card__image"></img>
        </a>
        <div className="project-card__title">
          <a href={"#"} target="_blank">
            <img src={"#"} alt={"img"} className="project-card__image"></img>
          </a>
        </div>
      </figure>
      <h6>{props.project.name} </h6>
    </div>
  );
};

export default ProjectCard;
