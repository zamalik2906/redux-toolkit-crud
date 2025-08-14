import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userDetailSlice";
import { toast } from "react-toastify";
import Card from "./Card";
import NoUser from "./NoUser";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, error, searchQuery, genderFilter } = useSelector(
    (state) => state.app
  );

  // Fetch users when component mounts
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Show toast while loading
  useEffect(() => {
    let toastId;
    if (loading) {
      toastId = toast.loading("Loading users...");
    } else {
      toast.dismiss(toastId);
    }
    return () => toast.dismiss(toastId);
  }, [loading]);

  // Handle error toast
  if (error) {
    toast.error(error);
    return null;
  }

  // Filter users based on search query
  const filteredUsers = users
    // Search filter
    .filter((user) =>
      (user.name || "").toLowerCase().includes(searchQuery.toLowerCase())
    )
    // Gender filter
    .filter((user) => {
      if (genderFilter === "all") return true;
      return (user.gender || "").toLowerCase() === genderFilter.toLowerCase();
    });

  return (
    <div className="container py-4">
      {/* Title */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="text-center mb-3">
            <i className="bi bi-people-fill text-primary me-2"></i>
            User Directory
          </h2>
          <p className="text-center text-muted">
            <i className="bi bi-info-circle me-1"></i>
            Total Users: {filteredUsers.length}
          </p>
        </div>
      </div>

      {/* User Cards */}
      <div className="row g-4">
        {filteredUsers.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
            <Card user={item} />
          </div>
        ))}
      </div>

      {/* No users found */}
      {filteredUsers.length === 0 && !loading && <NoUser />}
    </div>
  );
};

export default Read;
