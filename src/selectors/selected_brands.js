//
import {createSelector} from 'reselect'

const selectedBrands = state => state.filterbyBrand

const selectedInventory = state => state.items


export const selectFilteredInventory = createSelector(
    selectedInventory,
    selectedBrands,
    (inventory, brands ) => {
        if (inventory.items !== undefined) {
            return inventory.items.filter((item) => {
                if(brands.filterbyBrand!== undefined && brands.length !== 0 && brands.filterbyBrand.length !==0) {
                    return brands.filterbyBrand.includes(item.Brand)
                }
                return  item
            })
            }
        else {
            return inventory
        }
        // if (inventory == null || undefined) {
        //     return inventory
        // }
        //
        // return inventory.items.filter((item) => {
        //     if(brands == null || undefined){
        //         return inventory.items;
        //     }
        // const brandmatches = brands.length === 0 || item.items.includes(brands)
        // return brandmatches
        //     // inventory.items["0"].Brand === "Nike")
        // // return Object.values.selectedInventory.filter((item) => {
        // //     // const statusMatches =
        // //     //     showAllCompletions || todo.completed === completedStatus
        // //     const brandmatches = selectedBrands.length === 0 || item.includes(selectedBrands)
        // //     return brandmatches
        // })
    })




//test
// inventory.items.filter((item) => {
//     let brandName = undefined
//     let colorList = ["Red" , "White"]
//     if(brandName !== undefined) {
//         return brandName.includes(item.Brand)
//     }
//     return item
// })