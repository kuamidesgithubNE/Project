import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../components/card";
import "./project.css";

const ProjectContent = () => {
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
      <h1>Projects</h1>
      <div className="most-recent-view">
        <div className="card-holder">
          <Card jsonData={jsonData} />
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
