import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "./store/addUserSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.addUserSlice);
  const dispatch = useDispatch();

  const handleProfileClick = () => {
    if (!user) {
      navigate("/login");
    }
    if (user) {
      navigate("/profile");
    }
  };
  const handleLogout = async () => {
    const res = await axios.post(
      "http://localhost:7777/logout",
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> Dev-Tinder </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user && (
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            )}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li onClick={handleProfileClick}>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={() => navigate("/connectionsRequests")}>
              <a>Connections Requests</a>
            </li>
            <li onClick={() => navigate("/Connections")}>
              <a>Connections</a>
            </li>
            <li onClick={handleLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
