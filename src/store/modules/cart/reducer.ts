import { Reducer } from "redux";
import { ActionTypes, ICartState } from "./types";
import { produce } from "immer";

const INITIAL_STATE: ICartState = {
    items: [],
    failedStockCheck: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
//    console.log("🚀 ~ file: reducer.ts:9 ~ action:", action)
//    console.log("🚀 ~ file: reducer.ts:9 ~ state:", state)
   return produce( state, draft => {

       switch(action.type) {
        case ActionTypes.addProductToCartSuccess: {
            console.log("🚀 ~ file: reducer.ts:13 ~ state:", state)
            const { product } = action.payload;
    
            const productInCartIndex = state.items.findIndex(item => item.product.id === product.id )
    
            if (productInCartIndex >= 0) {
                draft.items[productInCartIndex].quantity++;
            } else {
                draft.items.push({
                    product,
                    quantity: 1
                })
            }
            break;
        }

        case ActionTypes.addProductToCartFailure: {
            draft.failedStockCheck.push(action.payload.productId);
            console.log("🚀 ~ file: reducer.ts:31 ~ ADD_PRODUCT_TO_CART_FAILURE:", action)

            return
        }

        
        default: {
            return state;
        }
       }
   })
}

export default cart;

