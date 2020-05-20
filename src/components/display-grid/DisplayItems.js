
import React from 'react';
import connect from "react-redux/es/connect/connect";

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

                {/*<ul className="todo-list">*/}
                    {/*{this.props.items && this.props.items.length*/}
                        {/*? this.props.items.map((toitemdo, index) => {*/}
                            {/*return <Todo key={`todo-${todo.id}`} todo={todo} />;*/}
                        {/*})*/}
                        {/*: "No todos, yay!"}*/}
                {/*</ul>*/}



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