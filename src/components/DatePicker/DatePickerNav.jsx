import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCentury } from "./util";
import { DateTime } from 'luxon';

class DatePickerNav extends Component {
    getYearRage = () => {
        let { month } = this.props;
        let { start, end } = getCentury(month);
        return { start, end };
    }

    getViewInfo = () => {
        let { month, view } = this.props;
        if (view === "day") {
            return month.monthLong + " " + month.year;
        } else if (view === "month") {
            return month.year;
        } else if (view === "year") {
            let { start, end } = this.getYearRage();
            return start + " - " + end;

        }
    }
    prev = () => {
        let { month, view } = this.props;
        let prev = month;
        if (view === "day") {
            prev = month.minus({ month: 1 });
        } else if (view === "month") {
            prev = month.minus({ year: 1 });
        } else if (view === "year") {
            prev = month.minus({ year: 10 });
        }
        this.props.onNavChange(prev, view);
    }
    changeView = () => {
        let { view } = this.props;
        let nextView = view;
        if (view === "day") {
            nextView = "month";
        } else if (view === "month") {
            nextView = "year";
        }
        this.props.onNavChange(this.props.month, nextView);
    }
    next = () => {
        let { month, view } = this.props;
        let next = month;
        if (view === "day") {
            next = month.plus({ month: 1 });
        } else if (view === "month") {
            next = month.plus({ year: 1 });
        } else if (view === "year") {
            next = month.plus({ year: 10 });
        }
        this.props.onNavChange(next, view);
    }
    canPrev = () => {
        let { month, disabled, view } = this.props;
        if (view === "day") {
            let disableYear = disabled.from.year;
            let disableMonth = disabled.from.month;
            if (month.year <= disableYear && month.month <= disableMonth) {
                return false;
            }
        } else if (view === "month") {
            let disableYear = disabled.from.year;
            if (month.year <= disableYear ) {
                return false;
            }
        } else if (view === "year") {
            let { start } = getCentury(month);
            let year = disabled.from.year;
            if (start < year) {
                return false;
            }
        }
        
        return true;

    }
    render() {
        return (
            <div className="datepicker-nav">
                {this.canPrev() ? (<span className="nav-btn btn-prev" onClick={this.prev}><FontAwesomeIcon icon="chevron-left" /></span>) : null}
                <div className="view-info" onClick={this.changeView}>{this.getViewInfo()}</div>
                <span className="nav-btn btn-next" onClick={this.next}><FontAwesomeIcon icon="chevron-right" /></span>
            </div>
        );
    }
}
export default DatePickerNav;