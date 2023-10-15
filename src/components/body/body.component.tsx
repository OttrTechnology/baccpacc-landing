import Content from "../content/content.component";
import Trips from "../../assets/trips.png";
import { Grid } from '@mantine/core';

import { useMediaQuery } from 'react-responsive'
import "./body.styles.scss";
import ContentHeader from "../content-header/content-header.component";

import StoreButton, {BUTTON_TYPES} from "../store button/store-button.component";



const Body = () => {
    
    //useMediaQuery is only used here for component rearragenment for mobile view
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
    const col = isTabletOrMobile? 12: 5;

    return (
        <Grid align="center" justify="center" className="body" >
            {
                isTabletOrMobile? (
                    <div className="body-content">
                        <ContentHeader />
                        <Grid.Col span={col} className="trip-img-container">
                            <img src= {Trips} className="trips" alt="trips" />
                        </Grid.Col>
                        <Grid.Col span={col} className="mobile-footer">
                            <StoreButton buttonType= {BUTTON_TYPES.google} />
                            <StoreButton buttonType= {BUTTON_TYPES.apple} />
                        </Grid.Col>
                    </div>

                ): (
                    <>
                        <Content col={col} />
                        <Grid.Col span={col}>
                            <img src= {Trips} className="trips" alt="trips" />
                        </Grid.Col>
                    </>
                )
            }
           
        </Grid>
    )
}

export default Body;