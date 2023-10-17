import { Container } from "@mantine/core";
import Header from "../../components/header/header.component";
import Body from "../../components/body/body.component";
import "./home.styles.scss";

const Home = () => {
  return (
      <div className="home" >
          <Header />
          <Container className="container">
              <Body />
          </Container>
      </div>
  )
}

export default Home;
