
import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {DisplayItem} from "../../redux/actions/genderaction";
import {ItemsFilter} from "../../redux/actions/ActionTypes";
import {womansitems} from "../../resources/mockData";
// let React = require('react/addons');
// let classNames = require('classnames');
// require('./styles.scss'); styles
// import { Link } from 'react-router-dom'

class DisplayItems extends React.Component {

    render() {

        //if passin womans
        //go to womans component
        //if passin womans/shoes
        // go womans/shoes
        // if womans/shoes/1
        return (

            <div id="">shit
                <p>{this.props.items} </p>



            </div>

        );
    }
}
const mapStateToProps = state => {
    // this.props = state.payload;
    console.log("states", state)
    return  { items : state.showItemsReducer.payload};
};

// export default DisplayItems;

export default connect(mapStateToProps)(DisplayItems);