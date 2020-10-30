import { useState } from "react";

export default function usePizza({ pizzas, inputs }) {
  // Create some state to hold our order
  const [order, setOrder] = useState([]);
  // Make a function to add things to order
  function addToOrder(ordered) {
    setOrder([...order, ordered]);
  }
  // Make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before item to remove
      ...order.slice(0, index),
      // everything after item to remove
      ...order.slice(index + 1, ),
    ]);
  }
  // Send this data to a serverless function when they check out
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  }
}
