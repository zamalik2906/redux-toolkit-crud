import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userDetailSlice";
import { toast } from "react-toastify";
import Card from "./Card";
import NoUser from "./NoUser";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.app);
  // const [selectedUser, setSelectedUser] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = (user) => {
  //   setSelectedUser(user);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedUser(null);
  // };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // useEffect() Hook For Toast
  useEffect(() => {
    let toastId;
    if (loading) {
      toastId = toast.loading("Loading users...");
    } else {
      toast.dismiss(toastId);
    }
    return () => toast.dismiss(toastId);
  }, [loading]);

  if (error) {
    toast.error(error);
    return null;
  }

  return (
    <div className="container py-4">
      {/* User Directory Section Code */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="text-center mb-3">
            <i className="bi bi-people-fill text-primary me-2"></i>
            User Directory
          </h2>
          <p className="text-center text-muted">
            <i className="bi bi-info-circle me-1"></i>
            Total Users: {users.length}
          </p>
        </div>
      </div>

      {/* Cards Component Section */}
      <div className="row g-4">
        {users.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
            <Card user={item} />
          </div>
        ))}
      </div>

      {/* User Not Found Component Section */}
      {users.length === 0 && !loading && <NoUser />}
    </div>
  );
};

export default Read;
