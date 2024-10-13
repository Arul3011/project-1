import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
function Signup(props) {
  const navigate = useNavigate();
  const dilogref = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  document.title = "LOGIN";

  const onSubmit = async (data) => {
    try {
      const dbres = await fetch("http://localhost:3000/api/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name,
          mobialNum: data.mobial,
        }),
      });
      const jres = await dbres.json();
      if (jres.message === "addedd") {
        dilogref.current.showModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sigin">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src="/pixelcut-export.jpeg" alt="logo" />

        <p>SIGIN</p>
        <label htmlFor=""></label>
        <input type="text" {...register("name")} placeholder="Name" />
        <input type="email" {...register("email")} placeholder="Email" />
        <input type="number" {...register("mobial")} placeholder="mobial-num" />
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <input
          type="password"
          {...register("conpassword")}
          placeholder="Confirm Password"
        />
        <Link to={"/login"} className="link">
          already have account
        </Link>

        <input
          disabled={isSubmitting ? true : false}
          type="submit"
          value={isSubmitting ? "Loading.." : "Sigin"}
        />
      </form>
      <dialog ref={dilogref} open>
        <div className="icon">
          <SiTicktick />
        </div>

        <div className="dilogbtn">
          <p>Account Created</p>
        </div>
        <div className="dilogbtn">
          <button
            onClick={() => {
              dilogref.current.close();
              navigate("/login");
            }}
          >
            Move to Login
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
