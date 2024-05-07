const ProfileInfo = () => {
  return (
    <div className="profileCard">
      <div className="info">
        <h2 style={{ fontWeight: "600", fontFamily: "Rubik" }}>Information</h2>
        <div className="info-card">
          <span>
            <i className="fa fa-globe"></i> Website
          </span>
          <p>www.kuamides.com</p>
        </div>
        <div className="info-card">
          <span>
            <i className="fa-regular fa-envelope"></i> Email
          </span>
          <p>kuamides@gmail.com</p>
        </div>
        <div className="info-card">
          <span>
            <i className="fa fa-phone"></i> Phone
          </span>
          <p>+233 54 030 2327</p>
        </div>
        <div className="info-card">
          <span>
            <i class="fa-regular fa-calendar-days"></i> Joined
          </span>
          <p>02/05/24</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
