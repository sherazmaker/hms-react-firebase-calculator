import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();

  return (
    <div className="bg-light bg-gradient py-2 d-flex justify-content-between align-items-center px-3 position-relative">
      <div className="text-dark d-flex align-items-center flex-grow-1">
        <span className="fw-bold bold-text">Name : </span> <span className='ml-2 text-capitalize fw-bold bold-text'>{user.displayName} </span>
      </div>
      <button className="btn btn-danger text-light btn-width" onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;
