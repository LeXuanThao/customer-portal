import React, { Component } from "react";
import { Info } from "luxon";
import { getCentury } from "./util";

class DatePickerCalendar extends Component {
    getWeekDays = () => {
        let { view } = this.props;
        if (view === "day")
            return <div className="weekdays d-flex justify-content-between align-items-stretch">
                {Info.weekdays("short").map((item, index) => {
                    return <span className="day-name" key={index}>{item}</span>;
                })}
            </div>
        else
            return null;
    }

    getCalendarView = () => {
        let { view } = this.props;
        if (view === "day") {
            return this.getDayView();
        } else if (view === "month") {
            return this.getMonthView();
        } else if (view === "year") {
            return this.getYearView();
        }
    }

    getDayView = () => {
        let rows = [];
        let cell = [];
        let { month, selected, disabled } = this.props;
        let first_day = month.startOf("month").startOf("week");
        let last_day = month.endOf("month").endOf("week");
        let totalDays = last_day.diff(first_day, "days").days;
        
        let disabledYear = disabled.from.year;
        let disabledMonth = disabled.from.month;
        let disabledDay = disabled.from.day;

        for (let i = 0; i <= totalDays; i++) {
            cell.push(first_day.plus({days:i}));
            if ((i+1) % 7 === 0) {
                rows.push(cell);
                cell = [];
            }
        }
        return (
            <table className="days day-view">
                <tbody>
                    {rows.map((rows, i) => {
                        return <tr className="day-row" key={i}>
                            {rows.map((day, j) => {
                                let tdOpts = {
                                    className: "day",
                                    key: (i*7)+j
                                }
                                let spanOpts = {}
                                if (selected && selected.toISODate() === day.toISODate()) tdOpts.className +=" selected";
                                if (day.month === month.month) tdOpts.className += " day-in-month";
                                if (disabledYear === month.year && disabledMonth === month.month && disabledDay > day.day) {
                                    tdOpts.className += " disabled";
                                } else {
                                    spanOpts.onClick = (e) => this.setDay(day);
                                }
                                return <td {...tdOpts}><span {...spanOpts}>{day.day}</span></td>
                            })}
                        </tr>;
                    })}
                </tbody>
            </table>
        );
    }

    getMonthView = () => {
        let rows = [];
        let cell = [];
        let { disabled, month } = this.props;
        let disabledYear = disabled.from.year;
        let disabledMonth = disabled.from.month;
        Info.months('short').forEach((month, index) => {
            cell.push(month);
            if ((index + 1) % 4 === 0) {
                rows.push(cell);
                cell = [];
            }
        });
        return (
            <table className="months month-view">
                <tbody>
                    {rows.map((rows, i) => {
                        return <tr className="month-row" key={i}>
                            {rows.map((monthName, j) => {
                                let monthIndex = (i * 4) + j + 1;
                                let tdOpts = {
                                    className: "month",
                                    key: monthIndex
                                }
                                let spanOpts = {}
                                if (disabledYear === month.year && disabledMonth > monthIndex) {
                                    tdOpts.className += " disabled";
                                } else {
                                    spanOpts.onClick = (e) => this.setMonth(monthIndex);
                                }
                                return <td {...tdOpts}><span {...spanOpts}>{monthName}</span></td>
                            })}
                        </tr>;
                    })}
                </tbody>
            </table>
        );
    }

    getYearView = () => {
        let rows = [];
        let cell = [];
        let { month, disabled } = this.props;
        let {start, end} = getCentury(month);
        let disabledYear = disabled.from.year;
        let count = 0;
        for (let i = start; i <= end; i++) {
            cell.push(i);
            count++;
            if (count % 4 === 0) {
                rows.push(cell);
                cell = [];
            }
        }
        return (
            <table className="years year-view">
                <tbody>
                    {rows.map((rows, i) => {
                        return <tr className="year-row" key={i}>
                            {rows.map((year, j) => {
                                let tdOpts = {
                                    className: "year",
                                    key: (i * 4) + j
                                }
                                let spanOpts = {}
                                if (year < disabledYear) {
                                    tdOpts.className += " disabled";
                                } else {
                                    spanOpts.onClick = (e) => this.setYear(year);
                                }
                                return <td {...tdOpts}><span {...spanOpts}>{year}</span></td>
                            })}
                        </tr>;
                    })}
                </tbody>
            </table>
        );
    }

    setYear = (year) => {
        let { month } = this.props;
        let newMonth = month.set({year});
        this.props.onCalendarSelect(newMonth, "month");
    }

    setMonth = (monthIndex) => {
        let { month } = this.props;
        let newMonth = month.set({month: monthIndex});
        this.props.onCalendarSelect(newMonth, "day");
    }

    setDay = (day) => {
        this.props.onCalendarSelect(day, "day");
    }

    render() {
        return (
            <div className="datepicker-calendar">
                {this.getWeekDays()}
                {this.getCalendarView()}
            </div>
        );
    }
}
export default DatePickerCalendar;