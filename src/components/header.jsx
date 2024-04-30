import pic1 from "../assets/bg_1.jpg";
const Header = () => {
  return (
    <div className="header">
      <h2 className="logo">Project Site</h2>
      <div className="search">
        <input type="text" placeholder="Search" />
        <i className="fa fa-search"></i>
      </div>
      <div className="profile">
        <i className="fa fa-bell"></i>
        <a href={pic1} target="blank">
          <img src={pic1} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
