import React from "react";

const CustomModal = ({ modalId, title = "Modal title", user }) => {
  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {user ? (
              <div className="row g-2">
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-hash text-secondary me-2"></i>
                  <strong>ID:</strong>
                  <span className="ms-2">{user.id}</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-person-fill text-primary me-2"></i>
                  <strong>Name:</strong>
                  <span className="ms-2">{user.name}</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-envelope-fill text-success me-2"></i>
                  <strong>Email:</strong>
                  <span className="ms-2">{user.email}</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-calendar-event text-info me-2"></i>
                  <strong>Age:</strong>
                  <span className="ms-2">{user.age}</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-gender-ambiguous text-warning me-2"></i>
                  <strong>Gender:</strong>
                  <span className="ms-2">{user.gender}</span>
                </div>
              </div>
            ) : (
              <p>...</p>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {/* <button type="button" className="btn btn-primary">
              Save changes
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
