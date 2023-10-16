import AppstoreIcon from "../appstore-icon/appstore-icon.component";
import GoogleIcon from "../google-icon/google-icon.component";

import "./store-button.styles.scss";

type StoreButtonProps = {
  buttonType: ButtonTypes;
};

type ButtonTypes = "google" | "apple";

export enum BUTTON_TYPES {
  google = "google",
  apple = "apple",
}

const StoreButton = ({ buttonType }: StoreButtonProps) => {
  if (buttonType === "google")
    return (
      <a
        href="https://play.google.com/store/apps/details?id=com.ottr.baccpacc&hl=en&gl=US"
        target="_blank"
      >
        <button className="store-button">
          <div className="store-button-content">
            <GoogleIcon />
            <div className="store-button-text">
              <p className="top-text"> Get it on</p>
              <p className="bottom-text"> google play</p>
            </div>
          </div>
        </button>
      </a>
    );
  else if (buttonType === "apple")
    return (
      <a
        href="https://apps.apple.com/np/app/baccpacc/id6448676201"
        target="_blank"
      >
        <button className="store-button">
          <div className="store-button-content">
            <AppstoreIcon />
            <div className="store-button-text">
              <p className="top-text"> Download on the</p>
              <p className="bottom-text"> app store </p>
            </div>
          </div>
        </button>
      </a>
    );
};

export default StoreButton;
