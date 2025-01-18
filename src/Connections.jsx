import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Connections = () => {
  useEffect(() => {}, []);
  const getAllConnection = async () => {
    try {
      const data = await axios.get("");
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      });
      console.log(err.message);
    }
  };

  return <div>Connections</div>;
};
export default Connections;
