import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Quotes from "./pages/Quotes/Quotes";
import { connect } from "react-redux";
import InputDatePicker from "./components/DatePicker/InputDatePicker";

class App extends Component
{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/quotes" component={Quotes} />
                    <Route path="*" render={()=>"Not Found!"} />
                </Switch>
                <InputDatePicker />
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => state.system;
export default connect(mapStateToProps)(App);