import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../components/card";
const Content = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      setJsonData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <div className="most-recent-view">
        <div className="most-recent-view-header">
          <h4>RECENT VIEW</h4>
          <a href="">View all</a>
        </div>
        <div className="card-holder">
          <Card jsonData={jsonData} />
        </div>
      </div>

      <div className="most-recent-view">
        <div className="most-recent-view-header">
          <h4>RECOMMENDED</h4>
          <a href="">View all</a>
        </div>
        <div className="card-holder">
          <Card jsonData={jsonData} />
        </div>
      </div>
    </div>
  );
};

export default Content;
