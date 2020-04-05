import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "./DatePicker";
import { DateTime } from "luxon";

class InputDatePicker extends Component {
    constructor(props) {
        super(props);
        var options = {
            show: false,
            selectedDate: ""
        }
        if (props.value) {
            let date = this.parseDate(props.value);
            if (date.c !== null) {
                options.selectedDate = props.value;
            }
        }
        this.state = options;
        this.datepickerRef = React.createRef();
        this.displayDatepicker = this.displayDatepicker.bind(this);
        this.onDateSelected = this.onDateSelected.bind(this);
    }

    displayDatepicker = () => {
        this.setState({show:true});
        window.addEventListener('click', this.handleClickOutside);
    }
    
    handleClickOutside = (e) => {
        e.stopPropagation();
        let { target } = e;
        let { current } = this.datepickerRef;
        if (!current.contains(target)) {
            this.setState({show:false});
            window.removeEventListener('click', this.handleClickOutside);
        }
    }

    onDateSelected = (date) => {
        let { format } = this.props;
        if (!format) {
            format = "YYYY-MM-DD";
        }
        let formatedDate = date.toFormat(format);
        this.setState({show:false, selectedDate: formatedDate});
        if (this.props.onDateSelected && typeof this.props.onDateSelected === "function") {
            this.props.onDateSelected(date);
        }
    }
    
    onDateChange = e => {
        e.preventDefault();
    }
    
    parseDate = (dateFormated = "") => {
        let { format } = this.props;
        return DateTime.fromFormat(dateFormated, format);
    }

    render() {
        let { show, selectedDate } = this.state;
        let { placeholder } = this.props;
        return (
            <div className="input-datepicker-wrapper" ref={this.datepickerRef}>
                <div className="input-group">
                    <input className="form-control" onFocus={this.displayDatepicker} value={selectedDate} onChange={this.onDateChange} placeholder={placeholder}/>
                    <div className="input-group-append">
                        <span className="input-group-text"><FontAwesomeIcon icon="calendar-alt" /></span>
                    </div>
                </div>
                {show?<DatePicker onDateSelected={this.onDateSelected} value={this.parseDate(this.state.selectedDate)} />:null}
            </div>
            
        );
    }
}
export default InputDatePicker;