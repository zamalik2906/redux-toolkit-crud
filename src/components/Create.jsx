import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, age, gender } = user;
    if (!name.trim() || !email.trim() || !age.trim() || !gender.trim()) {
      toast.error("All fields are required!");
      return;
    }

    const toastId = toast.loading("Submitting..."); // initial loading toast
    try {
      await dispatch(createUser(user)).unwrap(); // wait for API & handle errors

      toast.update(toastId, {
        render: "User created successfully!", // new message
        type: "success",
        isLoading: false,
        autoClose: 2500, // auto close after 2.5s
      });

      setUser({ name: "", email: "", age: "", gender: "" });
      setTimeout(() => {
        navigate("/read");
      }, 2500);
    } catch (error) {
      toast.update(toastId, {
        render: error?.message || "Failed to create user!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          {/* Header and Form Combined */}
          <div
            className="card shadow-lg border-0"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
              borderRadius: "20px",
            }}
          >
            {/* Header Section */}
            <div
              className="card-header bg-primary text-white text-center py-3"
              style={{ borderRadius: "20px 20px 0 0" }}
            >
              <div className="mb-2">
                <i
                  className="bi bi-person-plus-fill"
                  style={{ fontSize: "2rem" }}
                ></i>
              </div>
              <h2 className="mb-1 fw-bold">Create New User</h2>
              <p className="mb-0 opacity-75">
                <i className="bi bi-info-circle me-1"></i>
                Fill in the details below to add a new user
              </p>
            </div>

            {/* Form Body */}
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Name Field */}
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold">
                      <i className="bi bi-person-fill text-primary me-1"></i>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control border-2"
                      placeholder="Enter full name"
                      value={user.name}
                      onChange={handleChange}
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">
                      <i className="bi bi-envelope-fill text-success me-1"></i>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control border-2"
                      placeholder="example@email.com"
                      value={user.email}
                      onChange={handleChange}
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  {/* Age Field */}
                  <div className="col-md-6">
                    <label htmlFor="age" className="form-label fw-semibold">
                      <i className="bi bi-calendar-event-fill text-info me-1"></i>
                      Age
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      className="form-control border-2"
                      placeholder="Enter age"
                      value={user.age}
                      onChange={handleChange}
                      min="1"
                      max="120"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  {/* Gender Field */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-gender-ambiguous text-warning me-1"></i>
                      Gender
                    </label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input border-2"
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          checked={user.gender === "male"}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label fw-semibold"
                          htmlFor="male"
                        >
                          <i className="bi bi-gender-male text-primary me-1"></i>
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input border-2"
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          checked={user.gender === "female"}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label fw-semibold"
                          htmlFor="female"
                        >
                          <i className="bi bi-gender-female text-danger me-1"></i>
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 fw-bold"
                    style={{
                      borderRadius: "10px",
                      background:
                        "linear-gradient(135deg, #5a189a 0%, #7b2cbf 100%)",
                      border: "none",
                      boxShadow: "0 4px 15px rgba(90, 24, 154, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(90, 24, 154, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(90, 24, 154, 0.3)";
                    }}
                  >
                    <i className="bi bi-plus-circle-fill me-2"></i>
                    Create User
                  </button>
                </div>
              </form>
            </div>

            {/* Help Text */}
            <div className="card-footer bg-transparent border-0 text-center py-2">
              <small className="text-muted">
                <i className="bi bi-lightbulb me-1"></i>
                All fields are required. You'll be redirected after successful
                creation.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
