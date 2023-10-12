import Content from "../content/content.component";
import Trips from "../trips/trips.component";
import "./body.styles.scss";

const Body = () => {
    return (
        <div className="body">
            <Content />
            <Trips />
        </div>
    )
}

export default Body;