//
import {createSelector} from 'reselect'

const selectedBrands = state => state.items.brand

const selectedInventory = state => state.items


export const selectFilteredInventory = createSelector(
    selectedInventory,
    selectedBrands,
    (selectedInventory, selectedBrands ) => {
        return selectedInventory
        // return Object.values.selectedInventory.filter((item) => {
        //     // const statusMatches =
        //     //     showAllCompletions || todo.completed === completedStatus
        //     const brandmatches = selectedBrands.length === 0 || item.includes(selectedBrands)
        //     return brandmatches
        // })
    })
