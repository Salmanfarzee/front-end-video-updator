import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const AdminLogin: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card p-4 shadow-lg"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h2 className="text-center mb-4">Admin Login</h2>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email or Phone
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
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
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
