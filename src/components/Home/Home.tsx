import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card p-4 shadow-lg"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h2 className="text-center mb-4">Welcome to the Login page</h2>
          <div className="d-flex justify-content-center mb-3">
            <button
              className={`btn btn-primary  me-2`}
              onClick={() => {
                navigate("/adminlogin");
              }}
            >
              Login As Admin
            </button>
            <button
              className={`btn  btn-primary `}
              onClick={() => {
                navigate("/userlogin");
              }}
            >
              Login As User
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
