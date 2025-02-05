import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const UserLogin: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ cred: "", password: "" });
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.cred || !userData.password) {
      return setError("Both fields are mandatory for login.");
    } else {
        setError("");

      try {
        const resp = await axios.post(
          "http://localhost:4000/api/user/signin",
          userData
        );

        if (resp && resp.data && resp.data.user) {
          setUserData({ cred: "", password: "" });
          setError("");

          enqueueSnackbar("Logged In successfully", {
            variant: "success",
            autoHideDuration: 3000,
          });
          navigate("../home")
        }
      } catch (error: any) {
        enqueueSnackbar(error.response?.data?.message || "An error occurred", {
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    }
  };

  return (
    <div>

   <Header/>
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">User Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cred" className="form-label">
              Email or Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="cred"
              placeholder="Enter your email or phone"
              value={userData.cred}
              onChange={(e) => {
                setUserData((prev) => ({ ...prev, cred: e.target.value }));
                setError("");
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={(e) => {
                setUserData((prev) => ({ ...prev, password: e.target.value }));
                setError("");
              }}
            />
          </div>
          <button type="submit" className="btn mb-2 btn-primary w-100">
            User Login
          </button>
          <a
            className="cursor-pointer"
            onClick={() => {
              navigate("../usersignup");
            }}
          >
            Don't have an account? Sign up
          </a>
        </form>
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UserLogin;
