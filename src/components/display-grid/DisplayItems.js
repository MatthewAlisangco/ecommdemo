
import React,  { useState }  from 'react';
import connect from "react-redux/es/connect/connect";
import {selectFilteredInventory} from "../../selectors/selected_brands";
import ItemsModal from "./ItemsModal";
// import styled from 'styled-components';
// import selectFilteredInventory from '../selectors'
class DisplayItems extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

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
            // this.brandfilter()
        return (
            <div id="inner-grid">
                {/*<div>*/}
                {/*<button onClick={openModal}>I'm a modal</button>*/}
                {/*<ItemsModal showModal={showModal} setShowModal={setShowModal} />*/}
                {/*    </div>*/}


                <div>
                    {/*<ItemsModal show={this.state.show} handleClose={this.hideModal}>*/}
                    {/*    <p>Modal</p>*/}
                    {/*</ItemsModal>*/}
                    {/*<button type="button" onClick={this.showModal}>*/}
                    {/*    Open*/}
                    {/*</button>*/}

                </div>

                {this.props.inventory.map((items, key) =>
                    <div className ="card">
                        <div className="card-img">
                            <img className="image" src="http://placehold.it/350x250" alt="placeholder"></img>
                        </div>

                        <div className="card-text" key={key}>
                                <div className="card-text" >{items.Brand}
                                <div className="card-text" >{items.Style} </div>
                                <div className="card-text" >{items.Title}
                                <div className="card-text" > ${items.Price}
                                    <ItemsModal show={this.state.show} handleClose={this.hideModal} key={key} item={items}>
                                        {/*<div className="card-text" key={key}>*/}
                                        {/*<div className="card-text" >{items.Brand} </div>*/}
                                        {/*    <div className="card-text" >{items.Style} </div>*/}
                                        {/*    <div className="card-text" >{items.Title} </div>*/}
                                        {/*        <div className="card-text" > ${items.Price} </div>*/}
                                        {/*</div>*/}
                                    </ItemsModal>
                                    <button type="button" onClick={this.showModal}>
                                        Open
                                    </button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
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

export default connect(mapStateToProps)(DisplayItems);