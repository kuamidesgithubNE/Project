import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <i className="fa fa-home" title="Home"></i>
        </Link>
        <Link to="/projects">
          <i className="fa fa-search" title="Search"></i>
        </Link>
        <Link to="/modal">
          <i className="fa fa-add middle-icon" title="Add"></i>
        </Link>
        <i className="fa fa-code" title="Resources"></i>
        <Link to="/profile">
          <i className="fa-regular fa-user" title="Profile"></i>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
