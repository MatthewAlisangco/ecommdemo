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