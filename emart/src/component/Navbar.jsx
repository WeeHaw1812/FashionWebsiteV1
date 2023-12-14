import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm mb-4">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            HAW STORE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-info">
                <i className="fa fa-sign-in"> Login</i>
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-info ms-2">
                <i className="fa fa-user-plus"> Register</i>
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-info ms-2">
                <i className="fa fa-shopping-cart"> Cart ({state.length}) </i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
