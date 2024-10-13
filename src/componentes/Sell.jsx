import React, { useContext, useRef, useState } from "react";
import "./sell.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { storage } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DataContext from "../dataContext/DataContext";
import { SiTicktick } from "react-icons/si";

import { CgProfile } from "react-icons/cg";

const Sell = () => {
  const [downloadURL, setDownloadURL] = useState("");
  const { userID, user, userEmail, userName } = useContext(DataContext);
  const navigate = useNavigate();
  const dilogref = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    const file = data.file[0];
    if (file) {
      const storageRef = ref(storage, `files/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);

        const url = await getDownloadURL(snapshot.ref);
        setDownloadURL(url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please choose a file first.");
    }

    if (downloadURL) {
      try {
        const dbres = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: data.type,
            description: data.description,
            location: data.location,
            quantity: data.quantity,
            imageUrl: downloadURL,
            email: userEmail,
            username: userName,
            sellerId: userID,
          }),
        });
        if (dbres) {
          const dbjson = await dbres.json();
          if (dbjson.messege === "added") {
            dilogref.current.showModal();
          } else {
            alert("something went wrong");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
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
      <div className="sell-feild">
        <div className="sell-text">
          <div className="main-text-sce">
            <h3>get the best price for your bulk plastic</h3>
            <h1>Sell Your Plastic Material</h1>

            <p>
              WasteTrade makes it easier than ever to sell waste commodities for
              the best prices to the most sustainable reprocessors.
            </p>
            <img src="/pixelcut-export.jpeg" alt="logo" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Fill the details</p>
          <input
            type="text"
            placeholder="Material Type"
            {...register("type", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
          {errors.type && <p className="err-msg"> {errors.type.message}</p>}

          <input
            type="text"
            placeholder="Quantity (kg)"
            {...register("quantity", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
          {errors.quantity && (
            <p className="err-msg"> {errors.quantity.message}</p>
          )}

          <input
            type="text"
            placeholder="location"
            {...register("location", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
          {errors.quantity && (
            <p className="err-msg"> {errors.location.message}</p>
          )}

          <input
            type="file"
            accept="image/*"
            {...register("file", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
          {errors.file && <p className="err-msg"> {errors.file.message}</p>}

          <textarea
            name=""
            placeholder="Description"
            {...register("description", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          ></textarea>
          {errors.description && (
            <p className="err-msg"> {errors.description.message}</p>
          )}

          <button>{isSubmitting ? "Loading.." : "Submit"}</button>

          {errors.root && <p className="err-msg"> {errors.root.message}</p>}
        </form>
      </div>
      <dialog ref={dilogref} style={{ backgroundColor: "rgb(22, 214, 22)" }}>
        <div className="icon">
          <SiTicktick />
        </div>

        <div className="dilogbtn">
          <p>produce added scuessfully</p>
          <button
            onClick={() => {
              dilogref.current.close();
            }}
          >
            ok
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Sell;
