import React, { Component } from 'react';
import { DateTime } from 'luxon';
import DatePickerNav from './DatePickerNav';
import DatePickerCalendar from "./DatePickerCalendar";

class DatePicker extends Component {
    constructor(props) {
        super(props);
        let today = DateTime.local();
        let initDate = today;
        let value = props.value;
        
        let options = {
            currentView: "day",
            today: initDate,
            currentMonth: initDate,
            selected: null,
            disabled: {
                from: today
            }
        }
        if (value.c !== null) {
            options.selected = value;
        }
        this.state = options;
        // Fn for navigation;
        this.onNavChange = this.onNavChange.bind(this);
        this.onCalendarSelect = this.onCalendarSelect.bind(this);
    }

    onNavChange = (month, view) => {
        this.setState({
            currentMonth: month,
            currentView: view
        });
    }

    onCalendarSelect = (date, view) => {
        let {currentView} = this.state;
        let { onDateSelected } = this.props;
        let data = {
            currentMonth: date,
            currentView: view
        };
        if (currentView === view) {
            //When user choose a day;
            data['selected'] = date;
            if (onDateSelected && typeof onDateSelected === "function") {
                onDateSelected(date);
            }
        }
        this.setState(data);
    }

    render() {
        let { currentMonth, currentView, selected, disabled } = this.state;
        return (
            <div className="datepicker-wrapper">
                <DatePickerNav month={currentMonth} view={currentView} disabled={disabled} onNavChange={this.onNavChange}/>
                <DatePickerCalendar month={currentMonth} view={currentView} selected={selected} disabled={disabled} onCalendarSelect={this.onCalendarSelect} />
            </div>
        );
    }
}
export default DatePicker;