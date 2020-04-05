import React, { Component } from 'react';

class DropdownFilter extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            query: "",
            isSelectAll: false,
            isSelectAllFiltered: false
        }
        this.filterItems = this.filterItems.bind(this);
        this.toggleSelectAll = this.toggleSelectAll.bind(this);
        // this.toggleSelectItem = this.toggleSelectItem.bind(this);
    }

    filterItems(e) {
        let filterValue = e.target.value.trim().toLowerCase();
        this.setState({
            query: filterValue
        });
    }

    toggleSelectAll(e) {
        e.preventDefault();
        let { items } = this.props;
        this.setState({
            selected: this.state.isSelectAll?[]:items,
            isSelectAll: !this.state.isSelectAll
        });
    }

    toggleSelectItem(e, value) {
        e.preventDefault();
        let selected = this.state.selected;
        let idx = selected.indexOf(value);
        if (idx !== -1) {
            selected.splice(idx, 1);
        } else {
            selected.push(value);
        }
        this.setState({
            selected: selected
        });
    }

    isSelectedItem(value) {
        let selected = this.state.selected;
        return selected.includes(value);
    }

    isMatchQuery(item) {
        let query = this.state.query;
        return !(this.state.query !== "" && !item.toLowerCase().includes(query));
    }

    getItems() {
        let { items } = this.props;
        let dropdownItems = items.filter((item) => {
            if (this.isMatchQuery(item)) return item;
        });
        return dropdownItems;
    }

    isSelectAllFiltered() {
        let selected = this.state.selected;
        if (selected.length === 0) return false;
        var same = selected.filter(x => this.getItems().includes(x));
        return same.length === this.getItems().length;
    }

    isSelectAll() {
        let { items } = this.props;
        let selected = this.state.selected;
        return selected.length === items.length;
    }
    
    render() {
        return(
            <div className={"filter-wrapper"}>
                <div className={"dropdown-input"}>Select Category</div>
                <div className={"dropdown-filter-menu"}>
                    <div className={"dropdown-menu-item item-select-all"+(this.isSelectAll() ? " selected" : "")} onClick={this.toggleSelectAll}><span className="check"/>{this.state.isSelectAll ? "Unselect All" : "Select All"}</div>
                    <div className={"dropdown-menu-item-input-query"}>
                        <input type={"text"} onChange={this.filterItems}/>
                    </div>
                    {(this.state.query && this.getItems().length > 0) ? (<div className={"dropdown-menu-item item-select-all-filtered"+(this.isSelectAllFiltered() ? " selected" : "")}><span className="check"/>{this.isSelectAllFiltered() ? "Unselect All filtered results": "Select All filtered results"}</div>) : null}
                    {this.getItems().map((item, index) => {
                        return <div className={"dropdown-menu-item"+(this.isSelectedItem(item) ? " selected" : "")} key={index} onClick={(e)=>this.toggleSelectItem(e, item)}><span className="check"/>{item}</div>
                    })}
                    {this.getItems().length === 0 ? (<div className={"dropdown-menu-item no-data"}>No data available</div> ): null}
                </div>
            </div>
        );
    }    
}
export default DropdownFtiler;