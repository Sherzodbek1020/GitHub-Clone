import React from "react";
import Navbar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import "../assets/style/Overwiev.css";
import MyProfile from "../Components/MyProfile";
import img from "../assets/imgs/images (4).png";
import Footer from "../Components/Footer";

function Overwiev() {
  return (
    <div>
      <Navbar />
      <div className="navlinks">
        <div className="to-link">
          <NavLink to="/">
            <i className="fa-solid fa-book-open"></i>
            Overwiev
          </NavLink>
          <p className="ustun"></p>
        </div>
        <div className="to-link">
          <NavLink to="/Repositories">
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
            <i class="fa-solid fa-cube"></i>
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
      <div className="main">
        <MyProfile />
        <div className="pin">
          <div>
            <p>Pinned</p>
            <p>Customzie your pins</p>
          </div>
          <div className="pins">
            <div>
              <div className="pins-nav">
                <i className="fa-solid fa-book"></i>
                <h3>Figma-responsive</h3>
                <button>Public</button>
                <img src={img} alt="" />
              </div>
              <div className="pins-footer">
                <p></p>
                <p>JavaScript</p>
              </div>
            </div>
            <div>
              <div className="pins-nav">
                <i class="fa-solid fa-book"></i>
                <h3>pizza-menyu</h3>
                <button>Public</button>
                <img src={img} alt="" />
              </div>
              <div className="pins-footer">
                <p></p>
                <p>HTML</p>
              </div>
            </div>
            <div>
              <div className="pins-nav">
                <i className="fa-solid fa-book"></i>
                <h3>github-tuturial</h3>
                <button>Public</button>
                <img src={img} alt="" />
              </div>
              <div className="pins-footer">
                <p></p>
                <p>CSS</p>
              </div>
            </div>
            <div>
              <div className="pins-nav">
                <i class="fa-solid fa-book"></i>
                <h3>sherzodbek1020</h3>
                <button>Public</button>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Overwiev;
