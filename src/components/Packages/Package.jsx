import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Package extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.toggleShow = this.toggleShow.bind(this);
    }
    toggleShow() {
        let { show } = this.state;
        this.setState({show:!show});
    }
    render() {
        const { item } = this.props;
        let { show } = this.state;
        return (
            <div className="package">
                <div className="row">
                    <div className="col-md-4 package-image">
                        <img src={item.imageurl} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h4 className="package-title">{item.subject}</h4>
                        <span className="badge badge-info package-category">{item.quote_category}</span>
                        <p className="package-description">{item.short_description}</p>
                        <p className={"package-addition-info" + (show?" show":"")}>{item.brief_description}</p>
                        <div className="package-actions">
                            <button type="button" className="btn btn-outline-info mr-3" onClick={this.toggleShow}>View More</button>
                            <button type="button" className="btn btn-warning"><FontAwesomeIcon icon="plus"/>&nbsp;Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Package;