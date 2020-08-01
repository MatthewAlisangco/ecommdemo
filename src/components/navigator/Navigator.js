
import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
// let React = require('react/addons');
// let classNames = require('classnames');
// require('./styles.scss'); styles
// import { Link } from 'react-router-dom'


//filternavigator
class Navigator extends React.Component {

    // let itemscategory = 0;
    //get items by brand arrays.filter(brandname)
    //["nike", "addidas", "gap", "nike", "addidas", "gap"]
    //create hashset of all brands
    //view item by brand
    //
    constructor(props) {
        super(props);

        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    filterbyBrand(){
        let brandfilter = [];

        //if brand is checkmarked
        //return list with brand
        //if brand is unchecked
        //return list without brand
        // var marvelHeroes =  heroes.filter(function(hero) {
        //     return hero.franchise == “Marvel”;
        // });

    }

    handleChange(e) {
        let isChecked = e.target.checked;
        console.log("isChecked" , e.target.checked, e.target.value)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            [name]: value
        });
    }



    render() {

        //if passin womans
        //go to womans component
        //if passin womans/shoes
        // go womans/shoes
        // if womans/shoes/1
        if(!this.props.items){
            return   <nav id="mainNav">Nav
                <li> Brand</li>

                <li> Price</li>




                <li> Style</li>


            </nav>

                ;
        }
        return (

            <nav id="mainNav">Nav
                <li> Brand</li>
                {this.props.items.map(items =>
                    <div className ="card">
                        <div className="card-text">

                            <input
                                name="isGoing"
                                type="checkbox"
                                value={items}
                                onChange={this.handleChange} />
                            {items}
                        </div>

                    </div>)}

                {/*<form>*/}
                    {/*<label>*/}
                        {/*Brand Names:*/}


                        {/*<input*/}
                            {/*name="isGoing"*/}
                            {/*type="checkbox"*/}
                            {/*checked={this.state.isGoing}*/}
                            {/*onChange={this.handleInputChange} />*/}
                    {/*</label>*/}

                {/*</form>*/}
                <li> Price</li>




                <li> Style</li>


            </nav>

        );
    }

}

const mapStateToProps = state => {
    // this.props = state.payload;
    console.log("states", state)
    return  { items : state.showItemsReducer.payload};
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterByBrandName: (brandid) => {dispatch({type:'FILTER_BRAND', filterByBrandName: brandid})}
    }
};
export default connect(mapStateToProps)(Navigator);