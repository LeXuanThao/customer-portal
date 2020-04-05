import React, { Component } from 'react';
import { Badge, Card, Col, Form, Row } from "react-bootstrap";
import DropdownFilter from "../../../components/DropdownFilter";

const categories = ["FIT - 9 nights | 3 Cities","FIT - 3 nights | 1 City","FIT- 12 nights | 4 cities","FIT - 6 nights | 2 Cities","Group | Upto Max 12 Pax","Group | Upto Max 20 Pax","Group | Upto Max 26 Pax","Group | Upto Max 36 Pax","Group | Upto Max 50 Pax"];
class AccordionSelectItinerary extends Component {
    render() {
        let { show } = this.props;
        return (
            <Card>
                <Card.Header>Whats your Travel Plan Like ?</Card.Header>
                <div className={"collapse" + (show?" show":null)}>
                    <Card.Body>
                        <DropdownFilter items={categories} />
                    </Card.Body>
                </div>
            </Card>
        );
    }
}
export default AccordionSelectItinerary;