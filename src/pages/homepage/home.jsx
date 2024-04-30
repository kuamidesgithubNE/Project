import Content from "./HomeContent";
import NavBar from "../../components/navbar";
import Header from "../../components/header";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <NavBar />
    </div>
  );
};

export default Home;
