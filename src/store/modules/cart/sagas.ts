import { all, takeLatest, select, call, put} from 'redux-saga/effects'
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'
import { IState } from '../..';
import { AxiosResponse } from 'axios';
import api from '../../../services/api';
import { ActionTypes } from './types';

interface IStockResponse {
    id: number;
    quantity: number;
}
type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>

function* checkProductStock({payload}: checkProductStockRequest) {
    const { product } = payload;

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    })

    const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

    if (availableStockResponse.data.quantity > currentQuantity) {
        console.log("tem estoque")
        yield put(addProductToCartSuccess(product))
    } else {
        yield put(addProductToCartFailure(product.id))
    }
}

export default all([
    takeLatest(ActionTypes.addProductToCartSuccess, checkProductStock)
])