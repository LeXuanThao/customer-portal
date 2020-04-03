import React, { Component } from "react";
import { connect } from "react-redux";
import AccordionTravelPlan from "./components/AccordionTravelPlan";

class CreateStandardQuote extends Component
{
    render() {
        return (
            <div className="create-standard-page">
                <AccordionTravelPlan />
            </div>
        );
    }
}
export default connect()(CreateStandardQuote);