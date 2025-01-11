import { useNavigate, Outlet, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/addUserSlice";

const Body = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const userData = useSelector((state) => state.addUserSlice);

  const fetchUser = async () => {
    if (userData) return; //if user data is present then return
    try {
      const res = await axios.get("http://localhost:7777/profile", {
        withCredentials: true,
      });
      disptach(addUser(res.data));
    } catch (err) {
      if (err.response.status === 400) navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
