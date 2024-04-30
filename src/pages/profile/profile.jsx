import Header from "../../components/header";
import NavBar from "../../components/navbar";
import ProfileContent from "./profileContent";

const Profile = () => {
  return (
    <div className="page">
      <Header />
      <ProfileContent />
      <NavBar />
    </div>
  );
};

export default Profile;
