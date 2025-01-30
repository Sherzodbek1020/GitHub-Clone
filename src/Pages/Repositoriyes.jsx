import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import "../assets/style/Repository.css";
import MyProfile from "../Components/MyProfile";
import Footer from "../Components/Footer";

function Repositoriyes() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [starredRepos, setStarredRepos] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/sherzodbek1020/repos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Xatolik", error));
  }, []);

  console.log(data);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const getLanguage = (language) => {
    if (language === "JavaScript") return "#F1E05A";
    if (language === "CSS") return "#663399";
    if (language === "HTML") return "#E34C26  ";
    return "#ffffff";
  };

  const toggleStar = (repoName) => {
    setStarredRepos((prev) => ({
      ...prev,
      [repoName]: !prev[repoName],
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="navlinks-to">
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
      <div className="repo-main">
        <MyProfile />
        <div className="reposit">
          <div className="repo-search">
            <input
              type="text"
              placeholder="Find a repository..."
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <div>
              <p>Type</p>
              <i class="fa-solid fa-sort-down"></i>
            </div>
            <div>
              <p>Language</p>
              <i class="fa-solid fa-sort-down"></i>
            </div>
            <div>
              <p>Sort</p>
              <i class="fa-solid fa-sort-down"></i>
            </div>
            <div className="new">
              <i class="fa-solid fa-book"></i>
              <p>New</p>
            </div>
          </div>
          <div className="importent">
            {filteredData.map((repo, index) => (
              <div key={index} className="repo-importent">
                <div className="repo-main-nav">
                  <p>{`${repo.name}`}</p>
                  <button>Public</button>
                  <div onClick={() => toggleStar(repo.name)}>
                    <i
                      className={
                        starredRepos[repo.name] ? "fas fa-star" : "far fa-star"
                      }
                      style={{
                        color: starredRepos[repo.name] ? "#FFD700" : "",
                      }}
                    ></i>
                    <p>{starredRepos[repo.name] ? "Started" : "Star"}</p>
                    <p></p>
                    <i className="fa-solid fa-sort-down"></i>
                  </div>
                </div>
                <div className="repo-main-footer">
                  <p
                    style={{
                      backgroundColor: getLanguage(repo.language),
                    }}
                  ></p>
                  <p>{`${repo?.language}`}</p>
                  <p className="status"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Repositoriyes;
