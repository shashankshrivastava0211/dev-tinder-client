import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./store/feedSlice";
import Card from "./Card";

const Feed = () => {
  const feed = useSelector((store) => store.feedUser);
  const dispatch = useDispatch();

  const feedApiFunction = async () => {
    if (feed) return;
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
    <div className="flex justify-center items-center pt-10">
      {feed && <Card data={feed[0]} />}
    </div>
  );
};

export default Feed;
