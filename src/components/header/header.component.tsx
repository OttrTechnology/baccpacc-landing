import BaccpaccModal from "../baccpacc-modal/baccpacc-modal";

import Logo from "../logo/logo.component";
import "./header.styles.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Logo />
                <p>baccpacc</p>
            </div>
            <BaccpaccModal />
        </div>
    )
}

export default Header;