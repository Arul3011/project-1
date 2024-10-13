import { useState, useEffect, useContext } from "react";
import "./profile.css";
import DataContext from "../dataContext/DataContext";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GiWeight } from "react-icons/gi";
function Profile() {
  const { userID } = useContext(DataContext);
  const [postes, setPostes] = useState([]);
  const [userdetail, setUserdetail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const poste = await fetch("http://localhost:3000/api/posts/getpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: userID,
          }),
        });
        const jsonpost = await poste.json();
        if (jsonpost) {
          setPostes(jsonpost.insertresponse);
          //   console.log(jsonpost.insertresponse);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const fetchuserdetails = async () => {
      try {
        const poste = await fetch(
          "http://localhost:3000/api/user/userdetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userID: userID,
            }),
          }
        );
        const jsonpost = await poste.json();
        if (jsonpost) {
          setUserdetail(jsonpost.dbresponsre[0]);
        }
      } catch (error) {
        console.error("Error fetching userdetails:", error);
      }
    };

    fetchPosts();
    fetchuserdetails();
  }, []);
  console.log(userID);

  return (
    <>
      <div className="profile-nav">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/pixelcut-export.jpeg" alt="logo" />
          <p>RECYCLE RALLY</p>
        </div>
      </div>
      <div className="profile-card">
        <div className="p-one">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHEJxUmdL7HQw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718228388611?e=1733356800&v=beta&t=cfABjiBmwhlLTo4hEl5hLvwQwT6dS1dl_EYVKWxE01Q"
            alt="profile img"
          />
        </div>
        <div className="p-two">
          <h2>PROFILE</h2>
          <p>{userdetail.name}</p>
          <p>{userdetail.email}</p>
          <p>{userdetail.mobialNum}</p>
        </div>
      </div>
      <hr />
      <div className="profile-post-cards">
        <h1>PORDUCTES</h1>
        {!postes ? (
          <p>Loading...</p>
        ) : postes.length === 0 ? (
          <p>No posts available</p>
        ) : (
          postes.map((val) => (
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
                <button>BUY</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
export default Profile;
