import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";
import EventVenue from "./EventVenue";

const ServiceCard = () => {
    const [serviceCard, setServiceCard] = useState({});
    //get the specific service card when i click on the service detail button
    const {ServiceID} = useParams();
    // console.log(ServiceID);
    //get the service card details
    const cards = useLoaderData();
    // console.log(cards);


    useEffect(()=>{
        const getCard = cards?.find(card => card.ServiceID === ServiceID);
        setServiceCard(getCard);
    },[ServiceID, cards])
    // console.log(serviceCard);


    return (
        <div>
            <ServiceDetails serviceCard={serviceCard}></ServiceDetails>
            <div className="bg-blue-950">
            <EventVenue serviceCard={serviceCard}></EventVenue>
            </div>
        </div>
    );
};

export default ServiceCard;