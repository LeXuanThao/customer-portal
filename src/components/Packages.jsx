import React, { Component } from 'react';
import Package from "./Packages/Package";

class Packages extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            perPage: 10
        }    
        this.gotoPage = this.gotoPage.bind(this);
    }
    
    getFilteredItems() {
        let { filter, packages } = this.props;
        if (filter.length === 0) return packages;
        return packages.filter((item) => filter.includes(item.quote_category));
    }
    
    getItems = () => {
        let { perPage, page } = this.state;
        let index  = (page-1)*perPage;
        return this.getFilteredItems().slice(index, index+perPage);
    }
    
    getPackage = (item, index) => {
        return (
            <Package item={item} key={index} />
        );
    }
    
    getPaginate = () => {
        let { page, perPage } = this.state;
        let total = this.getFilteredItems().length;
        console.log(total);
        let max = Math.ceil(total/perPage);
        let isFirst = (page === 1);
        let isLast  = (page === max);
        let pageItems = [];
        for(let i = 1; i<= max; i++) {
            pageItems.push(
                <li className={"page-item" + (page===i?" disabled":"")} key={i}>
                    <button className="page-link" onClick={(e)=>this.gotoPage(i,e)}>{i}</button>
                </li>
            )
        }
        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={"page-item" + (isFirst?" disabled":"")}>
                        <button className="page-link" href="#" onClick={(e)=>!isFirst?this.gotoPage(page-1,e):false}>&lt;</button>
                    </li>
                    {pageItems}
                    <li className={"page-item" + (isLast?" disabled":"")}>
                        <button className="page-link" href="#" onClick={(e)=>!isLast?this.gotoPage(page+1,e):false}>&gt;</button>
                    </li>
                </ul>
            </nav>
        );
    }
    
    gotoPage = (page, e) => {
        e.preventDefault();
        this.setState({page});
        return false;
    }
    render() {
        return (
            <div className="packages-wrapper">
                {this.getItems().map((item, index) => {
                    return this.getPackage(item, index);
                })}
                {this.getPaginate()}
            </div>
        );
    }
}
export default Packages;