import pic1 from "../../assets/image1.jpeg";
import pic2 from "../../assets/bg_1.jpg";
const ProfileCard = () => {
  return (
    <div className="profileCard">
      <img src={pic1} alt="" />
      <div className="profilePic">
        <img src={pic2} alt="" />
      </div>
      <div className="profiles">
        <p>@arnoldy</p>
        <h2>Arnoldy Chofe</h2>
        <div className="profileButton">
          <button>
            {" "}
            <i className="fa-regular fa-user"> </i>Follow
          </button>
          <button>
            <i className="fa-regular fa-message"></i>Message
          </button>
          <button>
            <i className="fa fa-ellipsis"></i>More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
