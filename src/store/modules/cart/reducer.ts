import { Reducer } from "redux";
import { ICartState } from "./types";
import { produce } from "immer";

const INITIAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
   console.log("🚀 ~ file: reducer.ts:9 ~ action:", action)
   console.log("🚀 ~ file: reducer.ts:9 ~ state:", state)
   return produce( state, draft => {
       switch(action.type) {
        case "ADD_PRODUCT_TO_CART": {
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
        
        default: {
            return state;
        }
       }
   })
}

export default cart;

