import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface UserData {
  name: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
}

const UserSignup: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [userError, setUserError] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const Validate = () => {
    let isValid = true;

    // Validation for empty fields
    if (!userData?.name) {
      setUserError((prevError) => ({ ...prevError, name: "Name is missing" }));
      isValid = false;
    }

    if (!userData?.phone) {
      setUserError((prevError) => ({
        ...prevError,
        phone: "Phone is missing",
      }));
      isValid = false;
    }

    if (!userData?.email) {
      setUserError((prevError) => ({
        ...prevError,
        email: "Email is missing",
      }));
      isValid = false;
    }

    if (!userData?.password) {
      setUserError((prevError) => ({
        ...prevError,
        password: "Password is missing",
      }));
      isValid = false;
    }

    if (!userData?.confirmpassword) {
      setUserError((prevError) => ({
        ...prevError,
        confirmpassword: "Confirm password is missing",
      }));
      isValid = false;
    }

    // Password match validation
    if (userData?.password !== userData?.confirmpassword) {
      enqueueSnackbar("Password does not match with confirm password", {
        variant: "error",
        autoHideDuration: 3000,
      });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    if (!Validate()) {
      return; // Stop if validation fails
    }

    setLoading(true); // Start loading state

    try {
      const resp = await axios.post(
        "http://localhost:4000/api/user/signup",
        userData
      );

      if (resp && resp.data && resp.data.user) {
        setUserData({
          name: "",
          phone: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        enqueueSnackbar("User details saved successfully", {
          variant: "success",
          autoHideDuration: 3000,
        });
      }
    } catch (error: any) {
      enqueueSnackbar(error.response?.data?.message || "An error occurred", {
        variant: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card p-4 shadow-lg"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h2 className="text-center mb-4">User Signup</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={userData.name}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                  setUserError((prevError) => ({
                    ...prevError,
                    name: "",
                  }));
                }}
              />
              <div className="error-text">{userError.name}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={userData.phone}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }));
                  setUserError((prevError) => ({
                    ...prevError,
                    phone: "",
                  }));
                }}
              />
              <div className="error-text">{userError.phone}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="signup-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="signup-email"
                placeholder="Enter your email"
                autoComplete="email"
                value={userData.email}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                  setUserError((prevError) => ({
                    ...prevError,
                    email: "",
                  }));
                }}
              />
              <div className="error-text">{userError.email}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="signup-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signup-password"
                placeholder="Enter your password"
                autoComplete="new-password"
                value={userData.password}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                  setUserError((prevError) => ({
                    ...prevError,
                    password: "",
                  }));
                }}
              />
              <div className="error-text">{userError.password}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="signup-confirmpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signup-confirmpassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
                value={userData.confirmpassword}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    confirmpassword: e.target.value,
                  }));
                  setUserError((prevError) => ({
                    ...prevError,
                    confirmpassword: "",
                  }));
                }}
              />
              <div className="error-text">{userError.confirmpassword}</div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserSignup;
