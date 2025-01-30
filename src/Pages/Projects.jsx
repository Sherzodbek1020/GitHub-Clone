import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../assets/style/Project.css";
import MyProfile from "../Components/MyProfile";

function Projects() {
  return (
    <div>
      <Navbar />
      <div className="navlinks-tos">
        <div className="to-link">
          <NavLink to="/">
            <i className="fa-solid fa-book-open"></i>
            Overwiev
          </NavLink>
          <p className="ustun"></p>
        </div>
        <div className="to-link">
          <NavLink to="/repositories">
            <i className="fa-solid fa-book"></i>
            Repositories
          </NavLink>
          <p className="ustun"></p>
        </div>

        <div className="to-link">
          <NavLink to="/projects">
            <i className="fa-solid fa-bars-progress"></i>
            Projects
          </NavLink>
          <p className="ustun"></p>
        </div>
        <div className="to-link">
          <NavLink to="/packages">
            <i className="fa-solid fa-cube"></i>
            Packages
          </NavLink>
          <p className="ustun"></p>
        </div>
        <div className="to-link">
          <NavLink to="/stars">
            <i className="fa-regular fa-star"></i>
            Stars
            <p>1</p>
          </NavLink>
          <p className="ustun"></p>
        </div>
      </div>
      <div className="project-main">
        <MyProfile />
        <div className="project-right">
          <i className="fa-solid fa-bars-progress look"></i>
          <h1>Create your first GitHub project</h1>
          <p>
            Projects are a customizable, flexible tool for planning and tracking
            your work.
          </p>
          <button>New project</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
