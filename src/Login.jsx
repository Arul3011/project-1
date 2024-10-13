import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./dataContext/DataContext";
function Login() {
  const { setUser, setUserID, setUserEmail, setuserName } =
    useContext(DataContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  document.title = "LOGIN";
  const onSubmit = async (data) => {
    try {
      const dbres = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const jres = await dbres.json();
      if (jres.request === true) {
        setUser(true);
        setUserID(jres.userId);
        setUserEmail(jres.email);
        setuserName(jres.name);
        navigate("/");
      } else {
        console.log(jres.request);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src="/pixelcut-export.jpeg" alt="logo" />

        <p>LOGIN</p>
        <label htmlFor=""></label>
        <input type="email" {...register("email")} placeholder="email" />
        <input
          type="password"
          {...register("password")}
          placeholder="password"
        />
        <Link to={"/sign"} className="link">
          create account
        </Link>
        <Link to={""} className="link">
          Forget password
        </Link>
        <input
          disabled={isSubmitting ? true : false}
          type="submit"
          value={isSubmitting ? "Loading.." : "Login"}
        />
      </form>
    </div>
  );
}

export default Login;
