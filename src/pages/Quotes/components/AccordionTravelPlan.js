import React, { Component } from "react";
import { Accordion, Badge, Card, Col, Form, Row } from "react-bootstrap";

class AccordionTravelPlan extends Component {
    constructor(props) {
        super(props);
        this.validateForm = this.validateForm.bind(this);
        this.updateDateTravel = this.updateDateTravel.bind(this);
        this.onSingleSharingChange = this.onSingleSharingChange.bind(this);
        this.onDoubleSharingChange = this.onDoubleSharingChange.bind(this);
        this.onTripleSharingChange = this.onTripleSharingChange.bind(this);
        this.onChildWithBedChange = this.onChildWithBedChange.bind(this);
        this.onChildNoBedChange = this.onChildNoBedChange.bind(this);
        this.onAgeOfChildUpdate = this.onAgeOfChildUpdate.bind(this);
        this.state = {
            travelDate: null,
            singleSharing: 0,
            doubleSharing: 0,
            tripleSharing: 0,
            childNoBed: 0,
            childWithBed: 0,
            childAges: []
        };
    }

    totalAdult() {
        let {
            singleSharing,
            doubleSharing,
            tripleSharing,
            childWithBed
        } = this.state;
        let total =
            parseInt(singleSharing, 10) +
            parseInt(doubleSharing, 10) * 2 +
            parseInt(tripleSharing, 10) * 3 -
            parseInt(childWithBed, 10);
        return total;
    }

    getTotalAdult() {
        let total = this.totalAdult();
        return total > 0 ? total : 0;
    }

    totalChild() {
        let { childNoBed, childWithBed } = this.state;
        return parseInt(childNoBed, 10) + parseInt(childWithBed, 10);
    }

    onAgeOfChildUpdate = e => {
        let value = e.target.value;
        const rule = /(^([0-9])$)|(^[0-9])+([0-9,])+([0-9]$)/m;
        if (rule.exec(value)) {
            let ages = value.split(",").map(item => parseInt(item, 10));
            this.setState({ childAges: ages });
        }
        return false;
    };

    onChildWithBedChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10))
            ? parseInt(e.target.value, 10)
            : 0;
        this.setState({ childWithBed: value });
    };
    onChildNoBedChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10))
            ? parseInt(e.target.value, 10)
            : 0;
        this.setState({ childNoBed: value });
    };
    onSingleSharingChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10))
            ? parseInt(e.target.value, 10)
            : 0;
        this.setState({ singleSharing: value });
    };
    onDoubleSharingChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10))
            ? parseInt(e.target.value, 10)
            : 0;
        this.setState({ doubleSharing: value });
    };
    onTripleSharingChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10))
            ? parseInt(e.target.value, 10)
            : 0;
        this.setState({ tripleSharing: value });
    };

    updateDateTravel(selectedDate) {
        this.setState({ travelDate: selectedDate });
    }

    validateForm(e) {
        e.preventDefault();
        let { travelDate, childAges } = this.state;
        let totalAdult = this.totalAdult();
        let totalChild = this.totalChild();
        if (travelDate === null || typeof travelDate === "undefined") {
            alert("Please Enter Travel Date");
            return false;
        }
        if (totalAdult === 0 && totalChild === 0) {
            alert("Please Enter Rooms Details");
            return false;
        }
        if (totalAdult < 0) {
            alert(
                "Please check no of adults is zero.Configure room details properly."
            );
            return false;
        }
        if (totalChild !== childAges.length) {
            alert("Please Enter Age of Childs with Comma Separate Correctly");
            return false;
        }
        if (Math.max(...childAges) > 14) {
            alert("Please Enter childrens age below 14 years");
            return false;
        }
        if (
            typeof this.props.onComplete !== "undefined" &&
            typeof this.props.onComplete === "function"
        ) {
            let data = {
                ...this.state,
                totalAdult,
                totalChild
            };
            this.props.onComplete(data);
        }
        return false;
    }

    render() {
        return (
            <Card>
                <Card.Header>Whats your Travel Plan Like ?</Card.Header>
                <div className="collapse show">
                    <Card.Body>
                        <Form onSubmit={this.validateForm}>
                            <Row>
                                <Col xs={12}>
                                    <Row>
                                        <Col md={6} xs={12} lg={4}>
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        No of Rom
                                                    </Form.Label>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} xs={12} lg={4}>
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        Date Of Travel
                                                    </Form.Label>
                                                    <div className={"col-7"}>
                                                        {/* <DatePicker showMonthYearDropdown /> */}
                                                        {/* <InputDatePicker
                                                            onDayChange={this.updateDateTravel}
                                                        /> */}
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={4}></Col>
                                <Col xs={12} sm={12} md={6} lg={4}></Col>
                                <Col xs={12} sm={12} md={12} lg={4}></Col>
                                <Col xs={12}></Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </div>
            </Card>
        );
    }
}
export default AccordionTravelPlan;
