import Calendar from "../calendar/calendar.component";
import Heart from "../heart/heart.component";
import { TripType } from "../trips/trips.component";
import "./trip.styles.scss";

type TripProps = {
    trip: TripType
}

const Trip = ({trip}: TripProps) => {
    
    const { id, title, img, price, date, slots } = trip;

    return (
        <div className= {`trip ${id}`}>
            <img src= {img} />
            <div className="heart"> <Heart /> </div>
            <div className="date">
                <Calendar />
                <span> {date} </span>
            </div>
            <div className="trip-details">
                <p className="trip-title">{title}</p>
                <p className="trip-slots">{slots} slots remaining</p>
                <p className="trip-price">From {price} / <span className="individual">individual</span> </p>
            </div>
        </div>
    )
}

export default Trip;