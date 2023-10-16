import { useMediaQuery } from "react-responsive";
import BaccpaccModal from "../baccpacc-modal/baccpacc-modal";
import Logo from "../logo/logo.component";
import "./header.styles.scss";

const Header = () => {
  //useMediaQuery is only used here and in body.component.tsx for mobile view
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
        <p>baccpacc</p>
      </div>
      {!isTabletOrMobile && <BaccpaccModal />}
    </div>
  );
};

export default Header;
