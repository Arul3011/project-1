import Nav from "./Navation";
import "../componentes/blog.css";
import DataContext from "../dataContext/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { CgProfile } from "react-icons/cg";

function Blog() {
  const { user, setUser } = useContext(DataContext);
  const navigate = useNavigate();
  const articales = [
    {
      title: "title",
      blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam molestias magni, veniam repellat autem animi quis qui et officiis tenetur voluptatibus laboriosam eligendi at quidem laudantium explicabo dolorum saepe.",
    },
    {
      title: "title",
      blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam molestias magni, veniam repellat autem animi quis qui et officiis tenetur voluptatibus laboriosam eligendi at quidem laudantium explicabo dolorum saepe.",
    },
    {
      title: "title",
      blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam molestias magni, veniam repellat autem animi quis qui et officiis tenetur voluptatibus laboriosam eligendi at quidem laudantium explicabo dolorum saepe.",
    },
    {
      title: "title",
      blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam molestias magni, veniam repellat autem animi quis qui et officiis tenetur voluptatibus laboriosam eligendi at quidem laudantium explicabo dolorum saepe.",
    },
  ];

  return (
    <>
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
      <div className="blogs">
        {articales.map((val) => {
          return (
            <div className="articalcard" key={val.title}>
              <h2>{val.title}</h2>
              <p>{val.blog}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
