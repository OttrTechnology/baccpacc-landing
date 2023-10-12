import StoreButton, { BUTTON_TYPES } from "../store button/store-button.component";
import "./content.styles.scss";

const Content = () => {
    return (
        <div className="content">
            <div className="content-main">
                <p className="content-main-header">
                    Plan, Connect, and Share Adventures
                </p>
                <p className="content-main-body">
                A platform for seamless travel planning, connecting with fellow explorers, and creating unforgettable experiences.
                </p>
            </div>
            <div className="content-footer">
                <StoreButton buttonType= {BUTTON_TYPES.google} />
                <StoreButton buttonType= {BUTTON_TYPES.apple} />
            </div>
        </div>
    )
}

export default Content;