import axios from "axios";
import React, { useEffect } from "react";
import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./store/feedSlice";
import Card from "./Card";

const Feed = () => {
  const feed = useSelector((store) => store.feedUser);
  const dispatch = useDispatch();
  const feedApiFunction = async () => {
    const response = await axios.get("http://localhost:7777/feedapi", {
      withCredentials: true,
    });
    dispatch(addFeed(response.data.data));
  };
  useEffect(() => {
    feedApiFunction();
    console.log("Feed component mounted", feed);
  }, []);
  return (
    <div>
      <Card data={feed[0]} />
    </div>
  );
};

export default Feed;
