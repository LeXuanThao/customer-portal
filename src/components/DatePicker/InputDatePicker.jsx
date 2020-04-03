import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "./DatePicker";

class InputDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.displayDatepicker = this.displayDatepicker.bind(this);
        this.onDateSelected = this.onDateSelected.bind(this);
    }

    displayDatepicker = () => {
        this.setState({show:true});
    }

    onDateSelected = (date) => {
        console.log(date);
    }

    render() {
        let { show } = this.state;
        return (
            <div className="input-datepicker-wrapper form-inline">
                <div class="input-group">
                    <input className="form-control" onFocus={this.displayDatepicker}/>
                    <div class="input-group-append">
                        <span class="input-group-text"><FontAwesomeIcon icon="calendar-alt" /></span>
                    </div>
                </div>
                {show?<DatePicker onDateSelected={this.onDateSelected} />:null}
            </div>
            
        );
    }
}
export default InputDatePicker;