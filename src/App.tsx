import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import "./styles/global.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from "./components/Login/AdminLogin";
import UserLogin from "./components/Login/UserLogin";
import UserSignup from "./components/Login/UserSignup";



const App = () => (
 
          <div className="">
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="adminlogin" element={<AdminLogin />} />
              <Route path="userlogin" element={<UserLogin />} />
              <Route path="usersignup" element={<UserSignup />} />
              <Route path="*" element={<Navigate to="home" replace />} />




              {/* <Route
                path="onboarding/*"
                element={
                  <PrivateRoute>
                    <Onboarding />
                  </PrivateRoute>
                }
              /> */}
              {/* <Route
                path="dashboard/*"
                element={
                  // <PrivateRoute>
                  <Dashboard />
                  // </PrivateRoute>
                }
              /> */}
              {/* <Route path="campaign/:id" element={<ViewCampaign />} />
              <Route path="proposal/*" element={<PlanDetail />} /> */}
            </Routes>
          </div>
      
);

export default App;
