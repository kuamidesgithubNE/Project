import Header from "../../components/header";
import NavBar from "../../components/navbar";
import AddProjectContent from "./addprojectContent";

const AddProject = () => {
    return ( 
        <div className="page">
            <Header/>
            <AddProjectContent/>
            <NavBar/>
        </div>
     );
}
 
export default AddProject;