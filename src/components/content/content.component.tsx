import { Grid } from "@mantine/core";
import ContentHeader from "../content-header/content-header.component";
import StoreButton, {
  BUTTON_TYPES,
} from "../store-button/store-button.component";
import "./content.styles.scss";

type ContentProps = { col: 5 | 12 };

const Content = ({ col }: ContentProps) => {
  return (
    <Grid.Col span={col} className="content">
      <ContentHeader />

      <Grid.Col span={12} className="content-footer">
        <StoreButton buttonType={BUTTON_TYPES.google} />
        <StoreButton buttonType={BUTTON_TYPES.apple} />
      </Grid.Col>
    </Grid.Col>
  );
};

export default Content;
