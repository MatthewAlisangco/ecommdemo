
import React from 'react';
import connect from "react-redux/es/connect/connect";

class DisplayItems extends React.Component {

    renderList(){
        return this.props.items.map((items) => {
            return (
                <li key={items} className="items-container"> items </li>
            );
        });

    }

    render() {

        //if passin womans
        //go to womans component
        //if passin womans/shoes
        // go womans/shoes
        // if womans/shoes/1
            if(!this.props.items){
            return <div> nothing </div>;
        }

        return (
            <div id="inner-grid">
                {this.props.items.map(items =>
                    <div className ="card">
                        <div className="card-img">
                        <img className="image" src="http://placehold.it/350x250" alt="placeholder"></img>
                        </div>

                        <div className="card-text"> {items}
                        </div>

                </div>)}

            </div>

        );
    }
}

const mapStateToProps = state => {
    // this.props = state.payload;
    console.log("states", state)
    return  { items : state.showItemsReducer.payload};
};

export default connect(mapStateToProps)(DisplayItems);
