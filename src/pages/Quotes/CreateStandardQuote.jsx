import React, { Component } from "react";
import { connect } from "react-redux";
import AccordionTravelPlan from "./components/AccordionTravelPlan";
import AccordionSelectItinerary from "./components/AccordionSelectItinerary";

class CreateStandardQuote extends Component
{
    render() {
        return (
            <div className="create-standard-page">
                <AccordionTravelPlan onComplete={(data) => console.log(data)} show={true}/>
                <AccordionSelectItinerary show={true} />
            </div>
        );
    }
}
export default connect()(CreateStandardQuote);