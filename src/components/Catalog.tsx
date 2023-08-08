import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../store/modules/cart/types";
import api from "../services/api";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";

const Catalog = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    api.get('products').then( response => {
      setCatalog(response.data)
    })
  }, [])
  
  
  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch])
  return (
  <>
    <h1>Catalog</h1>
    { catalog.map((product) => {
      return (
      <article style={{borderBottom: "1px solid black", padding: "10px 5px"}} key={product.id}>
          <p>Nome: {product.title}</p>
          <p>Preço: R${product.price}</p>
          <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>
      </article>
      )
    })}
  </>
  
  );
};

export default Catalog;
