import React from "react";
import Navbar from "../Components/Navbar";
import MyProfile from "../Components/MyProfile";
import "../assets/style/Packages.css";
import img1 from "../assets/imgs/bb74f29780-removebg-preview.png";
import { NavLink } from "react-router-dom";
import img2 from "../assets/imgs/97_Docker_logo_logos-512.webp";
import img3 from "../assets/imgs/Apache Maven.png";
import img4 from "../assets/imgs/NuGet.png";
import img5 from "../assets/imgs/images (6).png";
import img6 from "../assets/imgs/npm.webp";
import img7 from "../assets/imgs/cargo_container.png";
import Footer from "../Components/Footer";

function Packages() {
  return (
    <div>
      <Navbar />
      <div className="navlinks-tosis">
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
      <div className="packages-main">
        <MyProfile />
        <div className="packages-left">
          <img src={img1} alt="" />
          <h1>Get started with GitHub Packages</h1>
          <p>
            Safely publish packages, store your packages alongside your code,
            and share your packages privately with your team.
          </p>
          <div className="registry">
            <h3>Choose a registry</h3>
            <div className="registryMain">
              <div>
                <p>
                  <img src={img2} alt="" /> Docker
                </p>
                <p>
                  A software platform used for building applications based on
                  containers — small and lightweight execution environments.
                </p>
                <button>Learn more</button>
              </div>
              <div>
                <p>
                  <img src={img3} alt="" /> Apache Maven
                </p>
                <p>
                  A default package manager used for the Java programming
                  language and the Java runtime environment.
                </p>
                <button>Learn more</button>
              </div>
              <div>
                <p>
                  <img src={img4} alt="" /> NuGet
                </p>
                <p>
                  A free and open source package manager used for the Microsoft
                  development platforms including .NET.
                </p>
                <button>Learn more</button>
              </div>
              <div>
                <p>
                  <img src={img5} alt="" /> RubyGems
                </p>
                <p>
                  A standard format for distributing Ruby programs and libraries
                  used for the Ruby programming language.
                </p>
                <button>Learn more</button>
              </div>
              <div>
                <p>
                  <img src={img6} alt="" /> npm
                </p>
                <p>
                  AA package manager for JavaScript, included with Node.js. npm
                  makes it easy for developers to share and reuse code.
                </p>
                <button>Learn more</button>
              </div>
              <div>
                <p>
                  <img src={img7} alt="" /> Containers
                </p>
                <p>
                  A single place for your team to manage Docker images and
                  decide who can see and access your images.
                </p>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Packages;
