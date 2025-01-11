import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "./store/addUserSlice";

const Profile = () => {
  const user = useSelector((state) => state.addUserSlice); // Initial user state from Redux
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [skills, setSkills] = useState(user.skills);
  const [age, setAge] = useState(user.age);
  const dispatch = useDispatch();

  // Function to check if any field has changed
  const isFormChanged = () => {
    return (
      firstName !== user.firstName ||
      lastName !== user.lastName ||
      about !== user.about ||
      skills !== user.skills ||
      age !== user.age
    );
  };

  const updateProfile = async () => {
    // Check if the form has been modified
    if (!isFormChanged()) {
      console.log("No changes detected, API call skipped.");
      return;
    }

    try {
      const res = await axios.patch(
        "http://localhost:7777/profile/edit",
        {
          firstName,
          lastName,
          about,
          skills,
          age,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data?.user);
      dispatch(addUser(res.data?.user)); // Update Redux store
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Profile</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First Name </span>
              </div>
              <input
                type="text"
                placeholder="Enter your First name"
                value={firstName || ""}
                onChange={(e) => setFirstName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                placeholder="Enter your Last name"
                value={lastName || ""}
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">About</span>
              </div>
              <input
                type="text"
                placeholder="Enter your About"
                value={about || ""}
                onChange={(e) => setAbout(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Age</span>
              </div>
              <input
                type="text"
                placeholder="Enter your Age"
                value={age || ""}
                onChange={(e) => setAge(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Skills</span>
              </div>
              <input
                type="text"
                value={skills || ""}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Enter your Skills"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={updateProfile}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
