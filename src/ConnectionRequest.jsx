import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "./store/connectionSlice";
import axios from "axios";

const ConnectionRequest = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connectionSlice);
  useEffect(() => {
    getRequestData();
  }, []);

  const getRequestData = async () => {
    try {
      const data = await axios.get(
        "http://localhost:7777/getUserConnectionRequest",
        {
          withCredentials: true,
        }
      );
      console.log(data);
      dispatch(addConnection(data.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  if (!connections) return <div>Loading...</div>;
  if (connections.length === 0) return <div>No connection request</div>;
  return <div>connection request</div>;
};

export default ConnectionRequest;
