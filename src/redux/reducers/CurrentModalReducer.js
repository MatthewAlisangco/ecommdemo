import {menitems} from "../../resources/mockData";

export default function CurrentModalReducer(state, action) {
    if (state === undefined)
        state = [];

    switch (action.type) {
        case 'SET_CURRENT':
            console.log(action);
            return Object.assign({}, state, { modalitem : action.item , modaltoggle: action.modaltoggle})

        case 'CLOSE_CURRENT_ITEM':
            return Object.assign({}, state, { modalitem : "[]", modaltoggle: false})
        default:
            return state;
    }


}
