import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "./store/addUserSlice";

const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const disptach = useDispatch();
  const navigate = useNavigate();

  const loginFunction = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        {
          emailID: emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      disptach(addUser(res.data));
      navigate("/feed");
      toast.success("Login successful!");

      if (res.status == 400) {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);

      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email ID:{emailId}</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={loginFunction}>
              Login
            </button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
