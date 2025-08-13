import React from "react";
import "./Card.css";
import CustomModal from "./CustomModal";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
  const modalId = `userModal-${user.id}`;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <>
      <div className="user-card card h-100 shadow-sm border-0">
        <div className="user-card-header text-center py-3">
          <div className="avatar-circle">
            <i className="bi bi-person-fill avatar-icon"></i>
          </div>
          <h5 className="card-title mb-0">{user.name}</h5>
          <small className="opacity-75">User ID: {user.id}</small>
        </div>

        <div className="card-body bg-light p-3">
          <div className="mb-3">
            <div className="d-flex align-items-center mb-1">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              <span className="fw-semibold">Email</span>
            </div>
            <p className="card-text text-muted ms-4 mb-0">{user.email}</p>
          </div>

          <div>
            <div className="d-flex align-items-center mb-1">
              <i className="bi bi-gender-ambiguous text-info me-2"></i>
              <span className="fw-semibold">Gender</span>
            </div>
            <span
              className="badge bg-light text-dark border ms-4"
              style={{ borderColor: "#e9ecef" }}
            >
              {user.gender}
            </span>
          </div>
        </div>

        <div className="card-footer bg-transparent border-0 text-center pb-3">
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => navigate(`/update/${user.id}`)}
          >
            <i className="bi bi-pencil me-1"></i>Update
          </button>
          <button
            className="btn btn-outline-danger btn-sm me-2"
            onClick={handleDelete}
          >
            <i className="bi bi-trash me-1"></i>Delete
          </button>
          <button
            className="btn btn-outline-warning btn-sm"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
          >
            <i className="bi bi-eye me-1"></i>View
          </button>
        </div>
      </div>

      <CustomModal modalId={modalId} title="User Details" user={user} />
    </>
  );
};

export default Card;
