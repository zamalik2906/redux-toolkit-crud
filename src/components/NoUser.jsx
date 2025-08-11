import React from "react";
import "./NoUser.css";

const NoUser = () => {
  return (
    <div className="no-user text-center py-5">
      <i className="bi bi-inbox text-muted no-user-icon"></i>
      <h4 className="text-muted mt-3">No users found</h4>
      <p className="text-muted">
        Start by creating some users in the Create Post section.
      </p>
    </div>
  );
};

export default NoUser;
