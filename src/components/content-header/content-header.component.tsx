import { Grid } from "@mantine/core";
import "./content-header.styles.scss";

const ContentHeader = () => {
  return (
    <Grid.Col span={12} className="content-main">
      <p className="content-main-header">Plan, Connect, and Share Adventures</p>
      <p className="content-main-body">
        A platform for seamless travel planning, connecting with fellow
        explorers, and creating unforgettable experiences.
      </p>
    </Grid.Col>
  );
};

export default ContentHeader;
