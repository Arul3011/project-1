import React, { useContext } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import DataContext from "../dataContext/DataContext";
import { CgProfile } from "react-icons/cg";
function Nav() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(DataContext);

  return (
    <div className="nav">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/pixelcut-export.jpeg" alt="logo" />
        <p>RECYCLE RALLY</p>
      </div>
      <div className="items">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>

        <a
          onClick={() => {
            navigate("/blog");
          }}
        >
          Blog
        </a>
        <a href="#contact">Contact</a>
        {user ? (
          <div className="profile">
            <CgProfile
              onClick={() => {
                navigate("/profile");
              }}
            />
          </div>
        ) : (
          <>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/sign");
              }}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
