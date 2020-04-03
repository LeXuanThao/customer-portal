import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CreateStandardQuote from "./CreateStandardQuote";

class Quotes extends Component
{
    render() {
        return (
            <Switch>
                <Route exact path={"/quotes"} render={()=>("List Quotes")} />
                <Route exact path={"/quotes/standard-quote-create"} component={CreateStandardQuote} />
                {/* <Route exact path={"/quotes/tdu-quotes"} component={CreateTDUQuote} /> */}
                {/* <Route exact path={"/quotes/custom-quotes"} component={CreateCustomQuote} /> */}
                <Route path={"/quotes/*"} render={()=>"Outbound"} />
            </Switch>
        );
    }
}
export default Quotes;