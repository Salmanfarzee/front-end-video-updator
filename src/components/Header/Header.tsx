import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-primary text-white py-3">
      <nav className="container d-flex justify-content-between">
        <h1 className="h4 mb-0">Video Portal</h1>
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#"
              onClick={() => {
                navigate("/adminlogin");
              }}
            >
              Login as admin
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#"
              onClick={() => {
                navigate("/userlogin");
              }}
            >
              Login as User
            </a>
          </li>
          {/* <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact</a>
                </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
