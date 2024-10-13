import React, { useContext, useEffect, useState } from "react";
import Nav from "./Navation";
import "./buy.css";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { GiWeight } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import DataContext from "../dataContext/DataContext";
function Buy() {
  const { user } = useContext(DataContext);

  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postes = await fetch("http://localhost:3000/api/posts");
        const jsonpost = await postes.json();
        if (jsonpost) {
          setItems(jsonpost.dbresponse);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  const handelquery = async (a, b, c) => {
    try {
      const reqmsg = await fetch("http://localhost:3000/api/sendqurey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sellerId: c,
          email: b,
          type: a,
        }),
      });
      const jsondata = await reqmsg.json();
      if (jsondata) {
        if (jsondata.mailrespnse === true) {
          alert("sucessfully reqested");
        } else {
          alert("reqested request cancled");
        }
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  return (
    <div className="buy-home">
      <div className="nav-sell ">
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
            <a></a>
            <a></a>
            <a></a>
            <a></a>

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
      </div>
      <div className="buy-main">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="buy-cards">
        {items && items.length > 0 ? (
          items.map((val) => (
            <div className="card" key={val._id}>
              <div className="one">
                <img src={val.imageUrl} alt="productimg" />
              </div>
              <div className="two">
                <h3>{val.type}</h3>
                <p className="card-p">{val.description}</p>
                <p>
                  <span>
                    <GiWeight />
                  </span>
                  {val.quantity}
                </p>
                <p>
                  <span>
                    <CiLocationOn />
                  </span>
                  {val.location}
                </p>
                <input
                  type="button"
                  value="BUY"
                  disabled={user ? false : true}
                  onClick={() => handelquery(val.type, val.email, val.sellerId)}
                />
              </div>
            </div>
          ))
        ) : items && items.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Buy;
