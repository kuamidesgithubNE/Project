import { Link, Outlet } from "react-router-dom";
import Modal from "../pages/addproject/modal";
import { useState } from "react";
const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <i className="fa fa-home" title="Home"></i>
        </Link>
        <Link to="/projects">
          <i className="fa fa-search" title="Search"></i>
        </Link>
        <i
          className="fa fa-add middle-icon"
          title="Add"
          onClick={() => setOpenModal(true)}
        ></i>
        <i className="fa fa-code" title="Resources"></i>
        <Link to="/profile">
          <i className="fa-regular fa-user" title="Profile"></i>
        </Link>
      </div>
      <Outlet />
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
};

export default NavBar;
