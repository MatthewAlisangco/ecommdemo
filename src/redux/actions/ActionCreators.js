//Actions creators, return an action so that reducer picks it up
//Can take in a input as payload and return to a reducer as well
export function addToBrandFilterList(list) {
    if (list!=null) {
        return {
            type: 'FILTER_BRAND',
            payload: list
        }
    }
}

export function searchByValue(value) {
    if (value!=null) {
        return {
            type: 'SEARCH_BY_VALUE',
            value: value
        }
    }
}


export function setCurrent(item) {
    return { type: 'SET_CURRENT', item: item };
}