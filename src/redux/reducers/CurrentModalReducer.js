export default function function CurrentReducer(state, action) {
    if (state === undefined)
        state = null;

    switch (action.type) {
        case 'SET_CURRENT':
            return action.item;
        default:
            return state;
    }
}
