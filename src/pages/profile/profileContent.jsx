import ProfileInfo from "./info";
import "./profile.css";
import ProfileCard from "./profilecard";
const ProfileContent = () => {
  return (
    <div className="container">
      <div className="profileDetails">
        <ProfileCard/>
        <ProfileInfo/>
      </div>
    </div>
  );
};

export default ProfileContent;
