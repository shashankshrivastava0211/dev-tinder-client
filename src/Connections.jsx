import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addConnection } from "./store/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connectionSlice);
  useEffect(() => {
    getAllConnection();
  }, []);
  const getAllConnection = async () => {
    try {
      const data = await axios.get("http://localhost:7777/getUserConnection", {
        withCredentials: true,
      });
      dispatch(addConnection(data.data.connections));
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      });
      console.log(err.message);
    }
  };
  if (!connections) return <div>Loading...</div>;
  if (connections.length === 0) return <div>No connections found</div>;
  return (
    <div>
      Connections
      {connections.map((connection) => (
        <div key={connection._id}>
          {connection.firstName} {connection.lastName}
        </div>
      ))}
    </div>
  );
};
export default Connections;
