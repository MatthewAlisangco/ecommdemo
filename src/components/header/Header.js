
import React, { Component } from 'react';
import {connect} from "react-redux";
import {ItemsFilter} from "../../redux/actions/ActionTypes";
import {applyMiddleware as dispatch} from "redux";
import {womansitems} from "../../resources/mockData";
import {DisplayItem} from "../../redux/actions/genderaction";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ItemsType: ItemsFilter.WOMAN_ITEMS,
            payload: womansitems
        };
    }

    handleItemsType = (itemtype) => {
        //     this.props.displayItemsFilter()
        // }
        this.props.DisplayItem(itemtype);
    }

    render() {

        //pass gendercategory
        //if passin womans
        //go to womans component
        //if passin womans/shoes
        // go womans/shoes
        // if womans/shoes/1
        return (

                <header id="pageHeader">
                    <div id="icon"> <button onClick={() => this.handleItemsType(ItemsFilter.MENS_ITEM)}> Icon</button> </div>
                    <div id="itembox">
                    <button onClick={() => this.handleItemsType(ItemsFilter.MENS_ITEM)}> Men</button>

                    <button onClick={() => this.handleItemsType(ItemsFilter.WOMAN_ITEMS)}>Woman</button>
                    <button onClick={() => this.handleItemsType(ItemsFilter.KIDS_ITEMS)}>Kids</button>
                </div>
                    <div id="usernamebox">
                        <div id="icon"> <button onClick={() => this.handleItemsType(ItemsFilter.MENS_ITEM)}> username</button> </div>
                    </div>
                </header>

        );
    }

}

export default connect(
    null,
    { DisplayItem }
)(Header);