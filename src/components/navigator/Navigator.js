import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {addToBrandFilterList} from "../../redux/actions/ActionCreators";


class Navigator extends React.Component {
    filterlist = new Set();
    constructor(props) {
        // this.thefilterlist = new Set();
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.thefilterlist = new Set();

    }
    //
    // handleItemsType = (itemtype) => {
    //     this.props.DisplayItem(itemtype);
    // }

    handleChange(e) {
        let isChecked = e.target.checked;
        let value = e.target.value
        // console.log("state" + this.props.items)
        console.log("isChecked" , e.target.checked, e.target.value)
        // console.log(this.filterbyBrand())
        // let filterlist = new Set();
        if(isChecked){
            this.filterlist.add(value);
        }
        if(this.filterlist.has(value) && !isChecked){
            this.filterlist.delete(value);
        }
        let thefilterlist = null
        thefilterlist =Array.from(this.filterlist)
        this.props.addToBrandFilterList(thefilterlist)
        // this.thefilterlist = filterlist
        console.log(this.filterlist)
    }

    render() {
        let brandsSet = new Set();
        if(!this.props.inventory.items){
            return <nav id="mainNav">Nav
                <li> Brand</li>
                <li> Price</li>
                <li> Style</li>
            </nav>;
        }

        if(this.props.inventory.items){
            for(let i =0 ; i < this.props.inventory.items.length ; i++) {
                brandsSet.add(this.props.inventory.items[i].Brand);
            }
            brandsSet = Array.from(brandsSet)
        }
        return (
            <nav id="mainNav">Nav
                <li> Brand</li>
                {brandsSet.map(brandName =>
                    <div className ="card">
                        <input
                            name="isGoing"
                            type="checkbox"
                            value={brandName}
                            onChange={this.handleChange} />
                        {brandName}
                    </div>)}
                <li> Price</li>

                <li> Style</li>

            </nav>);
    }

}

const mapStateToProps = state => {
    // this.props = state.payload;
    console.log("states", state)
    return  { inventory : state.items};
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToBrandFilterList: () => {dispatch(addToBrandFilterList())}
//     }
// };
export default connect(mapStateToProps, {addToBrandFilterList})(Navigator);