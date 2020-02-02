
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

                    {/*<button className="add-todo" onClick={this.handleAddTodo()}>*/}
                        {/*Add Todo*/}
                    {/*</button>*/}

                    <button onClick={() => this.handleItemsType(ItemsFilter.MENS_ITEM)}> Men</button>

                    <button onClick={() => this.handleItemsType(ItemsFilter.WOMAN_ITEMS)}>Woman</button>
                    <button onClick={() => this.handleItemsType(ItemsFilter.KIDS_ITEMS)}>Kids</button>

                    Header
                    Women
                    Men Children Eyewear watches jewellery
                </header>

        );
    }

}

const mapStateToProps = state => {
    return { displayItemsFilter: state.displayItemsFilter,
        genderItems: state.genderItems};
};

export default connect(
    null,
    { DisplayItem }
)(Header);