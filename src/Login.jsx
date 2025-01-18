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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!emailId) {
      setError("Email ID is required.");
      return false;
    }
    if (!password) {
      setError("Password is required.");
      return false;
    }
    setError(""); // Clear previous error
    return true;
  };

  const loginFunction = async () => {
    if (!validateInputs()) {
      return; // Stop execution if validation fails
    }

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

      // Handle success
      dispatch(addUser(res.data));
      navigate("/feed");
      toast.success("Login successful!");
    } catch (error) {
      console.log(error);

      // Extract error message and handle undefined cases
      const errorMessage =
        error.response?.data || "An unexpected error occurred.";
      setError(errorMessage);
      toast.error(errorMessage);
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
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={loginFunction}>
              Login
            </button>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
