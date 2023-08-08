import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => {
    return state;
  });
  console.log("🚀 ~ file: Cart.tsx:6 ~ Cart ~ state:", state);
  return (
    <table
      style={{
        border: "1px solid black",
        padding: "10px 5px",
        margin: "10px 5px",
      }}
    >
      <thead>
        <tr style={{ borderBottom: "1px solid black", padding: "10px 5px" }}>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
        <tbody>
          {state?.map((state) => {
            return (
              <tr>
                <th></th>
              </tr>
            );
          })}
        </tbody>
      </thead>
    </table>
  );
};

export default Cart;
