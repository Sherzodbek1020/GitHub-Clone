import React from "react";
import Navbar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import "../assets/style/Stars.css";
import MyProfile from "../Components/MyProfile";

function Stars() {
  return (
    <div>
      <Navbar />
      <div className="navlinks-tolike">
        <div className="to-link">
          <NavLink to="/">
            <i className="fa-solid fa-book-open"></i>
            Overwiev
          </NavLink>
          <p className="ustun"></p>
        </div>
        <div className="to-link">
          <NavLink to="/repositories">
            <i class="fa-solid fa-book"></i>
            Repositories
          </NavLink>
          <p className="ustun"></p>
        </div>

        <div className="to-link">
          <NavLink to="/projects">
            <i class="fa-solid fa-bars-progress"></i>
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
            <i class="fa-regular fa-star"></i>
            Stars
            <p>1</p>
          </NavLink>
          <p className="ustun"></p>
        </div>
      </div>
      <div className="starsMain">
        <MyProfile />
        <div className="starsLeft">
          <div className="starsList">
            <div className="starsListNav">
              <p>List (0)</p>
              <div>
                <p>Sort</p>
                <i class="fa-solid fa-caret-down"></i>
              </div>
              <button>Create list</button>
            </div>
            <div className="star-rights">
              <i class="fa-regular fa-star look"></i>
              <h1>Create your first list</h1>
              <p>
                Lists make it easier to organize and curate repositories that
                you have starred. <span>Create your first list</span>
              </p>
            </div>
          </div>
          <div className="searchStar">
            <h3>Stars</h3>
            <div>
              <div className="searchStarNav">
                <div>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Search stars" />
                </div>
                <button>Search</button>
                <div className="searchStarNavType">
                  <p>Type: All</p>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
                <div className="searchStarNavType">
                  <p>Language</p>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
                <div className="searchStarNavType">
                  <p>Sort by:Rectangly started</p>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
              <div className="searchStarFooter">
                <i class="fa-regular fa-star"></i>
                <h1>You don’t have any starred repositories yet.</h1>
                <p>
                  As you <span>explore GitHub</span>, star repositories to save
                  them for later and they’ll show up here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stars;
