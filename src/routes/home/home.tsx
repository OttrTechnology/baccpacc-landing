import Header from "../../components/header/header.component";
import Body from "../../components/body/body.component";
import { Grid } from '@mantine/core';

import "./home.styles.scss";

const Home = () => {
    return (
        <Grid gutter="xs" className='home'>
            <Header />
            <Body />
        </Grid>
    )
}

export default Home;