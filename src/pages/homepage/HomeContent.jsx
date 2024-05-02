import pic1 from "../../assets/bg_1.jpg";
import pic2 from "../../assets/bg_3.jpg";
import pic3 from "../../assets/img_2.jpg";
import Card from "../../components/card";
const Content = (props) => {
  const users = [
    {
      id: "1",
      image: pic1,
      title: "Car tracking",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, error libero possimus reiciendis inventore vero?",
    },
    {
      id: "2",
      image: pic2,
      title: "Farm Produce",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, error libero possimus reiciendis inventore vero?",
    },
    {
      id: "3",
      image: pic3,
      title: "E-poultry",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, error libero possimus reiciendis inventore vero?",
    },
    {
      id: "4",
      image: pic1,
      title: "Locator",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, error libero possimus reiciendis inventore vero?",
    },
  ];
  return (
    <div className="container">
      <div className="most-recent-view">
        <div className="most-recent-view-header">
          <h4>RECENT VIEW</h4>
          <a href="">View all</a>
        </div>
        <div className="card-holder">
          <Card users={users} />
        </div>
      </div>

      <div className="most-recent-view">
        <div className="most-recent-view-header">
          <h4>RECENT VIEW</h4>
          <a href="">View all</a>
        </div>
        <div className="card-holder">
          <Card users={users} />
        </div>
      </div>
    </div>
  );
};

export default Content;
