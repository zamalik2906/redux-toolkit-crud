import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
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

            {/* Search Bar */}
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
                />
              </div>
            </form>

            {/* User Menu */}
            <div className="ms-3">
              <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                    e.target.style.borderColor = "rgba(255,255,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                >
                  <i className="bi bi-person-circle me-2"></i>
                  <span>Admin</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-gear me-2"></i>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
