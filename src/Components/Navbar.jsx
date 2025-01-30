import React, { useState, useEffect } from "react";
import "../assets/style/Navbar.css";
import "../assets/style/NavbarTwo.css";
import accaunt from "../assets/imgs/188733601.png";
import home from "../assets/imgs/modified_image__1_-removebg-preview.png";
import drop from "../assets/imgs/kerakli-removebg-preview.png";
import telescop from "../assets/imgs/telescope_modified-removebg-preview.png";

function Navbar() {
  const [invisable, setInvisable] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [profil, setProfil] = useState(false);
  const [copilot, setCopilot] = useState(false);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/sherzodbek1020/repos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Xatolik", error));
  }, []);

  const handleCopilotClick = () => {
    setCopilot(true);
    setCreate(false);
  };

  const handleCreateClick = () => {
    setCreate(true);
    setCopilot(false);
  };

  return (
    <div className="nvb">
      <div className="navbar">
        <i className="fa-solid fa-bars" onClick={() => setInvisable(true)}></i>
        <i className="fa-brands fa-github"></i>
        <h2>Sherzodbek1020</h2>
        <div
          className="navbar-div1 search-true"
          onClick={() => setSearch(true)}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>
            Type <span>/</span> to search
          </p>
        </div>
        <div className="icons1" onClick={handleCopilotClick}>
          <i className="fa-brands fa-github-alt"></i>
          <p></p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <p className="line"></p>
        <div className="icons1" onClick={handleCreateClick}>
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="regular1">
          <i className="fa-regular fa-circle-dot"></i>
        </div>
        <div className="regular1">
          <i className="fa-solid fa-code-pull-request"></i>
        </div>
        <div className="regular1">
          <i className="fa-solid fa-inbox"></i>
        </div>
        <img
          src={accaunt}
          alt=""
          className="accaunt"
          onClick={() => setProfil(true)}
        />
      </div>

      <div className={`create ${create ? "createUser" : ""}`}>
        <div className="open-copilot">
          <i class="fa-solid fa-book"></i>
          <p>New repository</p>
        </div>
        <div className="open-copilot">
          <i class="fa-regular fa-bookmark"></i>
          <p>Import Repository</p>
        </div>
        <div className="paralimet"></div>
        <div className="open-copilot">
          <i class="fa-solid fa-computer"></i>
          <p>New codespace</p>
        </div>
        <div className="open-copilot">
          <i class="fa-solid fa-arrows-left-right"></i>
          <p>New gist</p>
        </div>
        <div className="paralimet"></div>
        <div className="open-copilot">
          <i class="fa-regular fa-building"></i>
          <p>New organization</p>
        </div>
        <div className="open-copilot">
          <i class="fa-solid fa-square-poll-vertical"></i>
          <p>New project</p>
        </div>
      </div>

      <div className={`copilot ${copilot ? "copilots" : ""}`}>
        <p>New conversation</p>
        <div>
          <i class="fa-solid fa-expand"></i>
          <p>Immersive</p>
        </div>
        <div className="paralimet"></div>
        <div className="open-copilot">
          <i class="fa-brands fa-github-alt"></i>
          <p>Open with</p>
          <i class="fas fa-greater-than"></i>
        </div>
        <div className="open-copilot">
          <i class="fa-solid fa-gear"></i>
          <p>Open with</p>
        </div>
      </div>

      <div className={`search ${search ? "searched" : ""}`}>
        <div className="input-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="owner:Sherzodbek1020" />
          <p>
            <i class="fa-solid fa-x" onClick={() => setSearch(false)}></i>
          </p>
        </div>
      </div>
      <div
        className={`strack ${copilot || create ? "stracker" : ""} `}
        onClick={() => {
          setCopilot(false);
          setCreate(false);
        }}
      ></div>

      <div
        className={`overlay ${invisable ? "show" : ""} ${search ? "show" : ""}
          ${profil ? "show" : ""}
          `}
        onClick={() => {
          setInvisable(false);
          setSearch(false);
          setProfil(false);
          setCopilot(false);
        }}
      ></div>
      <div className={`slide-div ${invisable ? "show" : ""}`}>
        <div className="slide-nav">
          <i className="fa-brands fa-github"></i>
          <i
            className="fa-solid fa-x end"
            onClick={() => setInvisable(false)}
          ></i>
        </div>
        <div className="slide">
          <div className="slide-main">
            <img src={home} alt="" />
            <p className="slide-div-p">Home</p>
          </div>
          <div className="slide-mains">
            <i className="fa-regular fa-circle-dot dot"></i>
            <p className="slide-div-p">Issues</p>
          </div>
          <div className="slide-mains">
            <i className="fa-solid fa-code-pull-request dot"></i>
            <p className="slide-div-p">Pull requests</p>
          </div>
          <div className="slide-maindot">
            <img src={drop} alt="" />
            <p className="slide-div-p">Projects</p>
          </div>
          <div className="slide-mains">
            <i className="fa-regular fa-comment dot"></i>
            <p className="slide-div-p">Discussions</p>
          </div>
          <div className="slide-mains">
            <i className="fa-solid fa-computer dot"></i>
            <p className="slide-div-p">Codespaces</p>
          </div>
          <div className="slide-mains">
            <i className="fa-brands fa-github-alt copi"></i>
            <p className="slide-div-p">Copilot</p>
          </div>
          <div className="viruble"></div>
          <div className="slide-main plus">
            <img src={telescop} alt="" />
            <p className="slide-div-p">Explore</p>
          </div>
          <div className="slide-mains">
            <i className="fa-solid fa-gift dot"></i>
            <p className="slide-div-p">Marketplace</p>
          </div>
          <div className="viruble"></div>
          <div className="repository">
            <div>
              <p>Repository</p>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {data.map((repo, index) => (
              <d iv key={index} className="repository-div">
                <img src={repo.owner.avatar_url} alt="" />
                <p>{`${repo.owner.login}/${repo.name}`}</p>
              </d>
            ))}
          </div>
          <p className="github-about">© 2025 GitHub, Inc.</p>
          <div className="nav-footer">
            <p>About</p> <p>Blog</p> <p>Terms</p> <p>Privacy</p>
            <p>Security</p>
            <p>Status</p> <p>Do not share me personal information</p>
            <p>Mange Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
