import StoreButton, { BUTTON_TYPES } from "../store button/store-button.component";
import "./content.styles.scss";
import { Grid } from '@mantine/core';

const Content = () => {
    return (
        <Grid.Col span={5} className="content">
            <Grid.Col span={12} className="content-main">
                <p className="content-main-header">
                    Plan, Connect, and Share Adventures
                </p>
                <p className="content-main-body">
                A platform for seamless travel planning, connecting with fellow explorers, and creating unforgettable experiences.
                </p>
            </Grid.Col>
            <Grid.Col span={11} className="content-footer">
                <StoreButton buttonType= {BUTTON_TYPES.google} />
                <StoreButton buttonType= {BUTTON_TYPES.apple} />
            </Grid.Col>
        </Grid.Col>
    )
}

export default Content;