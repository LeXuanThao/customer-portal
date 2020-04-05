import React, { Component } from "react";
import { Badge, Card, Col, Form, Row } from "react-bootstrap";
import InputDatePicker from "../../../components/DatePicker/InputDatePicker";

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
        let value = !isNaN(parseInt(e.target.value, 10)) ?
            parseInt(e.target.value, 10) :
            0;
        this.setState({ childWithBed: value });
    };
    onChildNoBedChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10)) ?
            parseInt(e.target.value, 10) :
            0;
        this.setState({ childNoBed: value });
    };
    onSingleSharingChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10)) ?
            parseInt(e.target.value, 10) :
            0;
        this.setState({ singleSharing: value });
    };
    onDoubleSharingChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10)) ?
            parseInt(e.target.value, 10) :
            0;
        this.setState({ doubleSharing: value });
    };
    onTripleSharingChange = e => {
        let value = !isNaN(parseInt(e.target.value, 10)) ?
            parseInt(e.target.value, 10) :
            0;
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
        let { show } = this.props;
        return (
            <Card>
                <Card.Header>Whats your Travel Plan Like ?</Card.Header>
                <div className={"collapse" + (show?" show":null)}>
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
                                                        <InputDatePicker format="dd-LL-y" placeholder="dd-mm-yyyy" onDateSelected={this.updateDateTravel}/>
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={4}>
                                    <Row>
                                        <Col xs={12}>
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        Double Sharing
                                                    </Form.Label>
                                                    <div className={"col-7"}>
                                                        <input
                                                            type={"number"}
                                                            className={"form-control"}
                                                            onChange={this.onDoubleSharingChange}
                                                            min={0}
                                                            step={1}
                                                        />
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        Triple Sharing
                                                    </Form.Label>
                                                    <div className={"col-7"}>
                                                        <input
                                                            type={"number"}
                                                            className={"form-control"}
                                                            onChange={this.onTripleSharingChange}
                                                            min={0}
                                                            step={1}
                                                        />
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        Single Sharing
                                                    </Form.Label>
                                                    <div className={"col-7"}>
                                                        <input
                                                            type={"number"}
                                                            className={"form-control"}
                                                            onChange={this.onSingleSharingChange}
                                                            min={0}
                                                            step={1}
                                                        />
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={4}>
                                    <Row>
                                        <Col xs={12} className="">
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        Child With Bed
                                                    </Form.Label>
                                                    <div className={"col-7"}>
                                                        <input
                                                            type={"number"}
                                                            className={"form-control"}
                                                            onChange={this.onChildWithBedChange}
                                                            min={0}
                                                            step={1}
                                                        />
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        Child No Bed
                                                    </Form.Label>
                                                    <div className={"col-7"}>
                                                        <input
                                                            type={"number"}
                                                            className={"form-control"}
                                                            onChange={this.onChildNoBedChange}
                                                            min={0}
                                                            step={1}
                                                        />
                                                    </div>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        {this.totalChild() > 0 ? (
                                            <Col xs={12}>
                                                <Form.Group>
                                                    <Row>
                                                        <Form.Label className={"col-5"}>
                                                            Age Of Child
                                                        </Form.Label>
                                                        <div className={"col-7"}>
                                                            <input
                                                                type={"text"}
                                                                className={"form-control"}
                                                                onChange={this.onAgeOfChildUpdate}
                                                                min={0}
                                                                step={1}
                                                            />
                                                            <span className="help-text">
                                                                (Use comma Eg:4,5)
                                                            </span>
                                                        </div>
                                                    </Row>
                                                </Form.Group>
                                            </Col>
                                        ) : null}
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={4}>
                                    <Row>
                                        <Col md={12} className={"order-sm-1 order-lg-0"}>
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        No of Adult{" "}
                                                        <Badge variant="warning">
                                                            {this.getTotalAdult()}
                                                        </Badge>
                                                    </Form.Label>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} className={"order-sm-1 order-lg-0"}>
                                            <Form.Group>
                                                <Row>
                                                    <Form.Label className={"col-5"}>
                                                        No of Child{" "}
                                                        <Badge variant="warning">
                                                            {this.totalChild()}
                                                        </Badge>
                                                    </Form.Label>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} className={"order-sm-0 order-lg-1"} />
                                    </Row>
                                </Col>
                                <Col xs={12}>
                                    <Row>
                                        <Col md={12} lg={10} className={"text-right"}>
                                            <button className={"btn btn-primary"} type="submit">
                                                Next
                                            </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </div>
            </Card>
        );
    }
}
export default AccordionTravelPlan;
