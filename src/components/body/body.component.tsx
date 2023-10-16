import { useMediaQuery } from "react-responsive";
import { Grid } from "@mantine/core";
import Content from "../content/content.component";
import Trips from "../../assets/trips.png";
import "./body.styles.scss";

const Body = () => {
  //useMediaQuery is only used here and in header.component.tsx for mobile view
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const col = isTabletOrMobile ? 12 : 5;

  return (
    <Grid align="center" justify="center" className="body">
      <div className="body-content">
        <Content col={col} />
        <Grid.Col span={col} className="trips-img-container">
          <img src={Trips} className="trips" alt="trips" />
        </Grid.Col>
      </div>
    </Grid>
  );
};

export default Body;
