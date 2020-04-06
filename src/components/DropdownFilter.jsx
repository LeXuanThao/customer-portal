import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DropdownFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            query: "",
            isSelectAll: false,
            isSelectAllFiltered: false,
            show: false
        }
        this.dropdownRef = React.createRef();
        this.filterItems = this.filterItems.bind(this);
        this.toggleSelectAll = this.toggleSelectAll.bind(this);
        this.toggleSelectAllItem = this.toggleSelectAllItem.bind(this);
        this.toggleFilterMenu = this.toggleFilterMenu.bind(this);
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
            selected: this.state.isSelectAll ? [] : items,
            isSelectAll: !this.state.isSelectAll
        }, () => this.emitValue(this.state.selected));
    }
    
    toggleSelectAllItem(e) {
        e.preventDefault();
        let { selected } = this.state;
        let items = this.getItems();
        let newSelected = [];
        if (this.isSelectAllFiltered()) {
            //current sellect items -> remove all;
            newSelected = selected.filter(x => !items.includes(x));
        } else {
            newSelected = selected.concat(items.filter(x => !selected.includes(x)));
            
        }
        this.setState({
            selected: newSelected
        }, () => this.emitValue(this.state.selected));
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
        }, () => this.emitValue(this.state.selected));
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
            return this.isMatchQuery(item);
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
    
    toggleFilterMenu = e => {
        e.preventDefault();
        let { show } = this.state;
        this.setState({show:!show});
        if (!show) {
            window.addEventListener('click', this.handleClickOutside);
        }
    }
    
    handleClickOutside = e => {
        e.stopPropagation();
        let { target } = e;
        let { current } = this.dropdownRef;
        if (!current.contains(target)) {
            this.setState({show:false});
            window.removeEventListener('click', this.handleClickOutside);
        }
    }
    
    getSelectedItems() {
        let { selected } = this.state;
        return selected.map((item, index) => {
           return <div className="selected-item" key={index}>{item}</div>
        });
    }
    emitValue = (selected) => {
        if (this.props.onFilterChange && typeof this.props.onFilterChange === "function") {
            this.props.onFilterChange(selected);
        }
    }

    render() {
        let { show, selected } = this.state;
        let { placeholder } = this.props;
        return (
            <div className={"filter-wrapper"} ref={this.dropdownRef}>
                <div className={"dropdown-input"} onClick={this.toggleFilterMenu}>
                    {selected.length === 0 ? placeholder : this.getSelectedItems()}
                    <span className="icon">
                        {show?(<FontAwesomeIcon icon="chevron-down"/>):(<FontAwesomeIcon icon="chevron-right"/>)}
                    </span>
                </div>
                <div className={"dropdown-filter-menu" + (show?" show":"")}>
                    <div className={"dropdown-menu-item item-select-all" + (this.isSelectAll() ? " selected" : "")} onClick={this.toggleSelectAll}>
                        <span className="check">{this.isSelectAll() ? (<FontAwesomeIcon icon={["far", "check-square"]} />) : (<FontAwesomeIcon icon={["far", "square"]} />)}</span>
                        {this.state.isSelectAll ? "Unselect All" : "Select All"}
                    </div>
                    <div className={"dropdown-menu-item-input-query"}>
                        <input type={"text"} onChange={this.filterItems} />
                    </div>
                    {(this.state.query && this.getItems().length > 0) ? (<div className={"dropdown-menu-item item-select-all-filtered" + (this.isSelectAllFiltered() ? " selected" : "")} onClick={this.toggleSelectAllItem}>
                        <span className="check">{this.isSelectAllFiltered()?<FontAwesomeIcon icon={["far", "check-square"]} />:<FontAwesomeIcon icon={["far", "square"]} />}</span>
                        {this.isSelectAllFiltered() ? "Unselect All filtered results" : "Select All filtered results"}
                        </div>
                    ) : null}
                    {this.getItems().map((item, index) => {
                        return (
                        <div className={"dropdown-menu-item" + (this.isSelectedItem(item) ? " selected" : "")} key={index} onClick={(e) => this.toggleSelectItem(e, item)}>
                            <span className="check">
                                {this.isSelectedItem(item)?(<FontAwesomeIcon icon={["far", "check-square"]} />):(<FontAwesomeIcon icon={["far", "square"]} />)}
                            </span>
                            {item}
                        </div>
                        );
                    })}
                    {this.getItems().length === 0 ? (<div className={"dropdown-menu-item no-data"}>No data available</div>) : null}
                </div>
            </div>
        );
    }
}
export default DropdownFilter;