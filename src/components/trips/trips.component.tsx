import langtang from "./assets/langtang.png";
import lapisphedi from "./assets/lapsiphedi.png";
import sunkoshi from "./assets/sunkoshi.png";
import tindhara from "./assets/tindhara.png";

import Trip from "../trip/trip.component";
import "./trips.styles.scss";

export type TripType = {
    id: string;
    title: string,
    img: string,
    date: string,
    price: string,
    slots: number
}

const trips: TripType[] = [
    {
        id: "tc0",
        title: "Camping in Lapsiphedi",
        img: lapisphedi,
        date: "Oct 28 - 30",
        price: "Rs. 15,000",
        slots: 2
    },
    {
        id: "tc1",
        title: "Tindhara waterfall hike",
        img: tindhara,
        date: "Nov 12",
        price: "Rs. 5,000",
        slots: 3
    },
    {
        id: "tc2",
        title: "Sunkoshi rafting",
        img: sunkoshi,
        date: "Aug 12 - 15",
        price: "Rs. 10,000",
        slots: 2
    },
    {
        id: "tc3",
        title: "Langtang trek",
        img: langtang,
        date: "Oct 20 - 30",
        price: "Rs. 20,000",
        slots: 5
    }
]

const Trips = () => {
    return (
        <div className="trips">
            {
                trips.map((trip) => <Trip trip = {trip} key={trip.title} />)
            }
        </div>
    )
}

export default Trips;