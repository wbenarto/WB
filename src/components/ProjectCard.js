import React from "react";
import github from "../assets/icons/github.svg";

const ProjectCard = (props) => {
  console.log(props.project);
  return (
    <div className="project-card col-md-6 col-lg-4">
      <figure className="project-card__wrapper">
        <div className="project-card__top">
          <a href={props.project.deployed_url} target="_blank">
            <img
              src={props.project.image}
              alt={"alt"}
              className="project-card__image"
            ></img>
          </a>
        </div>

        <div className="project-card__info">
          <a href={"#"} target="_blank">
            <img
              src={github}
              alt={"github link"}
              className="project-card__icon"
            ></img>
          </a>
          <h6 className="project-card__title">{props.project.name} </h6>
        </div>

        <div className="project-card__tech">
          <h6>Technologies:</h6>
          <div className="project-card__category">
            {props.project.category
              ? props.project.category.map((e) => <li>[{e}]</li>)
              : props.project.category}
          </div>
          {/* <div>
            <p className="project-card__desc">{props.project.desc}</p>
          </div> */}
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
