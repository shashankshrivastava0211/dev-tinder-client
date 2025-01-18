import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import "./App.css";

import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import { Provider } from "react-redux";
import store from "./store/store";
import Feed from "./Feed";
import Connections from "./Connections";
import ConnectionRequest from "./ConnectionRequest";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />

              <Route path="/profile" element={<Profile />} />
              <Route path="/Connections" element={<Connections />} />
              <Route
                path="/connectionsRequests"
                element={<ConnectionRequest />}
              />

              <Route path="/feed" element={<Feed />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-center" autoClose={3000} />
      </Provider>
    </>
  );
}

export default App;
