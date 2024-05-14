const Card = (props) => {
  console.log(props);
  const usersDetails = props.jsonData.map((user) => {
    return (
      <div className="card">
        <img src={user.image} alt="" />
        <div className="card-details">
          <h3>{user.title}</h3>
          <p>{user.info}</p>
          <p style={{ color: "grey" }}>{user.date}</p>
          <div className="card-footer">
            <div
              className="card-icons"
              style={{
                display: "flex",
                gap: "10px",
                fontSize: "14px",
                color: "gray",
              }}
            >
              <span>
                <i className="fa fa-thumbs-up"></i> {user.like}
              </span>
              <span>
                <i className="fa fa-eye"></i> {user.view}
              </span>
            </div>
            <button>Read More</button>
          </div>
        </div>
      </div>
    );
  });
  return <>{usersDetails}</>;
};

export default Card;
