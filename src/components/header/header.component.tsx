import { useMediaQuery } from "react-responsive";
import BaccpaccModal from "../baccpacc-modal/baccpacc-modal";
import Logo from "../logo/logo.component";
import "./header.styles.scss";
import { Container } from "@mantine/core";

const Header = () => {
  //useMediaQuery is only used here and in body.component.tsx for mobile view
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <Container className="header" size = "xl">
      <div className="logo-container">
        <Logo />
        <p>baccpacc</p>
      </div>
      {!isTabletOrMobile && <BaccpaccModal />}
    </Container>
  );
};

export default Header;
