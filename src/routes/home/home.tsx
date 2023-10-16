import { Container } from "@mantine/core";
import Header from "../../components/header/header.component";
import Body from "../../components/body/body.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <Container size={"91.66667%"} className="home">
      <Header />
      <Body />
    </Container>
  );
};

export default Home;
