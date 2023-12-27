import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(proptypes) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${proptypes.mode} bg-${proptypes.mode}`}
      >
        <Link className="navbar-brand" to="/">
          {proptypes.title}{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-Link mx-2" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link mx-2" to="/about">
                {proptypes.about}{" "}
              </Link>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form> */}
          <button
            className={`btn btn-${
              proptypes.mode === "light" ? "dark" : "light"
            }`}
            onClick={proptypes.toggle}
          >
            {" "}
            {proptypes.mode === "light"
              ? "Turn On DarkMode"
              : "Turn On LightMode"}{" "}
          </button>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Text-Utils",
  about: "About",
};
