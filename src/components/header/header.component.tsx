import BaccpaccModal from "../baccpacc-modal/baccpacc-modal";
import Logo from "../logo/logo.component";
import { Grid } from '@mantine/core';
import "./header.styles.scss";

const Header = () => {
    return (
        <Grid.Col span={12} className="header">
            <div className="logo-container">
                <Logo />
                <p>baccpacc</p>
            </div>
            <BaccpaccModal />
        </Grid.Col>
    )
}

export default Header;