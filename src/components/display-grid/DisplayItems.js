
import React,  { useState }  from 'react';
import connect from "react-redux/es/connect/connect";
import {selectFilteredInventory} from "../../selectors/selected_brands";
// import ItemsModal from "./ItemsModal";
import {setCurrent, closeCurrent} from "../../redux/actions/ActionCreators";
import ItemsModal from "./ItemsModal";
// import styled from 'styled-components';
// import selectFilteredInventory from '../selectors'
class DisplayItems extends React.Component {

    constructor() {
        super();
    }
    brandfilter() {
        let i = 0
        let j = 0
        let newload = []
        if(!this.props.brandName.filterbyBrand || this.props.brandName.filterbyBrand.length == 0){
           newload = this.props.inventory.items
            console.log("load" , newload)
        }
        else {
            while (i < this.props.brandName.filterbyBrand.length) {
                while (j < this.props.inventory.items.length) {
                    if (this.props.brandName.filterbyBrand[i] == this.props.inventory.items[j].Brand) {
                        newload.push(this.props.inventory.items[j])
                    }
                    j++;
                }
                if(j == this.props.inventory.items.length){
                    j=0
                }
                i++;
            }
            console.log("load" , newload)
        }
    }

    render() {
        if(!this.props.inventory){
            return <div> </div>;
        }

        return (
            <div id="inner-grid">

                {this.props.inventory.map((items, key) =>
                    <div className ="card">
                        <div className="card-img">
                            <img className="image" src="https://via.placeholder.com/350x250"alt="placeholder"></img>
                        </div>

                        <div className="card-text" key={key}>
                                <div className="card-text" >{items.Brand} </div>
                                <div className="card-text" >{items.Style} </div>
                                <div className="card-text" >{items.Title} </div>
                                <div className="card-text" > ${items.Price} </div>
                                <div className="card-text" >
                                    <ItemsModal/>
                                <button type="button" onClick={ () => this.props.setCurrent(items,true)}>
                                open
                                </button>
                                </div>
                            </div>
                    </div>)
                }
            </div>

        );
    }
}

const mapStateToProps = state => {
    // this.props = state.payload;
    console.log("states", state)
    return  { inventory : selectFilteredInventory(state),
               brandName: state.filterbyBrand };
};

const mapDispatchToProps = (dispatch, ownProps, curritem) => {
    return {
        toggleItemModal: (curritem, bool) => setCurrent(curritem, bool)
    }
}

export default connect(mapStateToProps, {setCurrent,closeCurrent})(DisplayItems);