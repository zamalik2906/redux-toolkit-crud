import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchQuery, setGenderFilter } from "../features/userDetailSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm"
        style={{
          background: "linear-gradient(135deg, #5a189a 0%, #7b2cbf 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="container">
          {/* Brand */}
          <Link
            className="navbar-brand d-flex align-items-center fw-bold"
            to="/"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              className="bi bi-database-fill-gear me-2"
              style={{ fontSize: "1.8rem" }}
            ></i>
            <span className="text-white">RTK</span>
            <span
              className="badge bg-light text-primary ms-2"
              style={{ fontSize: "0.6rem" }}
            >
              v1.0
            </span>
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link d-flex align-items-center px-3 mx-1 ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                  style={{
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    border: "1px solid transparent",
                    backgroundColor:
                      location.pathname === "/"
                        ? "rgba(255,255,255,0.15)"
                        : "transparent",
                    borderColor:
                      location.pathname === "/"
                        ? "rgba(255,255,255,0.3)"
                        : "transparent",
                  }}
                >
                  <i className="bi bi-person-plus-fill me-2"></i>
                  <span className="fw-semibold">Create User</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link d-flex align-items-center px-3 mx-1 ${
                    location.pathname === "/read" ? "active" : ""
                  }`}
                  to="/read"
                  style={{
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    border: "1px solid transparent",
                    backgroundColor:
                      location.pathname === "/read"
                        ? "rgba(255,255,255,0.15)"
                        : "transparent",
                    borderColor:
                      location.pathname === "/read"
                        ? "rgba(255,255,255,0.3)"
                        : "transparent",
                  }}
                >
                  <i className="bi bi-people-fill me-2"></i>
                  <span className="fw-semibold">View Users</span>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="input-group" style={{ maxWidth: "300px" }}>
                <span className="input-group-text bg-white border-0">
                  <i className="bi bi-search text-muted"></i>
                </span>
                <input
                  className="form-control border-0 shadow-none"
                  type="search"
                  placeholder="Search users..."
                  aria-label="Search"
                  style={{
                    borderRadius: "0 8px 8px 0",
                    boxShadow: "none",
                  }}
                  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                />
              </div>
            </form>
            {/* Gender Filter */}
            <div className="d-flex align-items-center ms-3">
              <label className="me-2 text-white">Gender:</label>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="all"
                  defaultChecked
                  onChange={(e) => dispatch(setGenderFilter(e.target.value))}
                />
                <label className="form-check-label text-white">All</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => dispatch(setGenderFilter(e.target.value))}
                />
                <label className="form-check-label text-white">Male</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => dispatch(setGenderFilter(e.target.value))}
                />
                <label className="form-check-label text-white">Female</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
