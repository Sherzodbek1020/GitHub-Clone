import React from "react";
import img1 from "../assets/imgs/188733601.png";
import { useState, useEffect } from "react";
import "../assets/style/Profile.css";
import algaritm from "../assets/imgs/photo_2024-04-24_14-41-35.jpg";

function MyProfile() {
  const [follof, setFollow] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/sherzodbek1020/followers")
      .then((res) => res.json())
      .then((data) => setFollow(data.length))
      .catch((error) => console.error("Qaydadir hatolik boldi", error));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/sherzodbek1020/following")
      .then((res) => res.json())
      .then((data) => setFollowing(data.length))
      .catch((error) => console.error("Qaydadir hatolik boldi", error));
  }, []);

  return (
    <div className="profile">
      <img src={img1} alt="" />
      <i class="fa-regular fa-face-smile">
        <p>Set status</p>
      </i>
      <h2>Yusufjonov Sherzodbek</h2>
      <h3>Sherzpdnek1020 · /he/him</h3>
      <p>Front-end engineer 👨🏾‍💻</p>
      <button>Edit profile</button>
      <div className="follow-data">
        <i class="fa-solid fa-user-group"></i>
        <p className="followers">
          {follof} <span>followers</span>
        </p>
        <p>·</p>
        <p>
          {following} <span>following</span>
        </p>
      </div>
      <div className="profile-data">
        <i className="fa-regular fa-building glop"></i>
        <p>Freelance</p>
      </div>
      <div className="profile-data">
        <i className="fa-solid fa-location-dot glop"></i>
        <p>Andijan</p>
      </div>
      <div className="profile-data">
        <i className="fa-regular fa-clock glop"></i>
        <p>17:32 (UTC -12:00)</p>
      </div>
      <div className="profile-data">
        <i className="fa-regular fa-envelope glop"></i>
        <p>nazirjonnazirjon70@gmail.com</p>
      </div>
      <div className="profile-data">
        <i className="fa-solid fa-link glop "></i>
        <p>https://t.me/yusufjonov_sh</p>
      </div>
      <div className="life"></div>
      <div className="organizations">
        <p>Organizations</p>
        <img src={algaritm} alt="" />
      </div>
    </div>
  );
}

export default MyProfile;
