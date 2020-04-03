// import React from "react";
// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";
// import { formatDate, parseDate } from "react-day-picker/moment";
// import PropTypes from "prop-types";

// const today = new Date();
// const currentYear = today.getFullYear();
// const fromMonth = today;
// const toMonth = new Date(currentYear + 10, 11);

// const FORMAT = "DD-MM-YYYY";

// function YearMonthForm({ date, localeUtils, onChange }) {
//    const months = localeUtils.getMonths();

//    const years = [];
//    for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
//       years.push(i);
//    }

//    const handleMonthChange = function handleMonthChange(e) {
//       const stateMonth = e.target.value;
//       onChange(new Date(date.getFullYear(), stateMonth));
//    };
//    const handleYearChange = function handleYearChange(e) {
//       const stateYear = e.target.value;
//       onChange(new Date(stateYear, date.getMonth()));
//    };

//    return (
//       <div className="DayPicker-Caption">
//          <select
//             name="month"
//             onChange={handleMonthChange}
//             value={date.getMonth()}
//          >
//             {months.map((month, i) => (
//                <option key={month} value={i}>
//                   {month}
//                </option>
//             ))}
//          </select>
//          <select
//             name="year"
//             onChange={handleYearChange}
//             value={date.getFullYear()}
//          >
//             {years.map(year => (
//                <option key={year} value={year}>
//                   {year}
//                </option>
//             ))}
//          </select>
//       </div>
//    );
// }

// class InputDatePicker extends React.Component {
//    constructor(props) {
//       super(props);
//       this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
//       this.handleDayChange = this.handleDayChange.bind(this);
//       this.state = {
//          month: fromMonth
//       };
//    }

//    handleYearMonthChange(month) {
//       this.setState({ month });
//    }

//    handleDayChange(date) {
//       if (
//          typeof this.props.onDayChange !== "undefined" &&
//          typeof this.props.onDayChange === "function"
//       )
//          this.props.onDayChange(date);
//    }

//    render() {
//       return (
//          <div className="YearNavigation">
//             <DayPickerInput
//                formatDate={formatDate}
//                format={FORMAT}
//                parseDate={parseDate}
//                placeholder={FORMAT}
//                onDayChange={this.handleDayChange}
//                dayPickerProps={{
//                   month: this.state.month,
//                   disabledDays: { before: today },
//                   fromMonth: fromMonth,
//                   toMonth: toMonth,
//                   captionElement: ({ date, localeUtils }) => (
//                      <YearMonthForm
//                         date={date}
//                         localeUtils={localeUtils}
//                         onChange={this.handleYearMonthChange}
//                      />
//                   )
//                }}
//             />
//          </div>
//       );
//    }
// }
// InputDatePicker.propsTypes = {
//    onDayChange: PropTypes.func
// };
// export default InputDatePicker;
import React from 'react';
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
    this.state = {
      month: fromMonth,
    };
  }

  handleYearMonthChange(month) {
    this.setState({ month });
  }

  render() {
    return (
      <div className="YearNavigation">
        <DayPickerInput
        dayPickerProps={{
         month:this.state.month,
         fromMonth:fromMonth,
         toMonth:toMonth,
         captionElement: ({ date, localeUtils }) => (
           <YearMonthForm
             date={date}
             localeUtils={localeUtils}
             onChange={this.handleYearMonthChange}
           />
         )
        }}
        />
      </div>
    );
  }
}