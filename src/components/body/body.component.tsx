import Content from "../content/content.component";
import Trips from "../../assets/trips.png";
import { Grid } from '@mantine/core';

import "./body.styles.scss";

const Body = () => {
    return (
        <Grid.Col span={12} className="body">
            
            <Content />
            <Grid.Col span={5}>
                <img src= {Trips} className="trips" alt="trips" />
            </Grid.Col>
        </Grid.Col>
    )
}

export default Body;