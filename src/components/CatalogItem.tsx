import React, { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IState } from "../store";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck: boolean = useSelector<IState, boolean>( state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
      dispatch(addProductToCartRequest(product));
    },
    [dispatch, product]
  );

  return (
    <article
      style={{ borderBottom: "1px solid black", padding: "10px 5px" }}
      key={product.id}
    >
      <p>Nome: {product.title}</p>
      <p>Preço: R${product.price}</p>
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailedStockCheck && <span>Falta de estoque</span>}
    </article>
  );
};

export default CatalogItem;
