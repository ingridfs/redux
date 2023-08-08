import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
   console.log("🚀 ~ file: reducer.ts:9 ~ action:", action)
   console.log("🚀 ~ file: reducer.ts:9 ~ state:", state)
   switch(action.type) {
    case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        state.items.push(product);

        return {
            ...state,
            items: [
                ...state.items,
                {
                    product,
                    quantity: 1, 
                }
            ]
        }
        
    }
    default: {
        return state;
    }
   }
}

export default cart;

