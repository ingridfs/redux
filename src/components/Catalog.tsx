import { useEffect, useState } from "react";

import { IProduct } from "../store/modules/cart/types";
import api from "../services/api";

import CatalogItem from "./CatalogItem";

const Catalog = () => {
  
  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    api.get('products').then( response => {
      setCatalog(response.data)
    })
  }, [])
  
  return (
  <>
    <h1>Catalog</h1>
    { catalog.map((product) => {
      return (
        <CatalogItem key={product.id} product={product}/>
      )
    })}
  </>
  
  );
};

export default Catalog;
