import React, { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types";
import { addProductToCart } from "../store/modules/cart/actions";
import { useDispatch } from "react-redux";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
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
    </article>
  );
};

export default CatalogItem;
