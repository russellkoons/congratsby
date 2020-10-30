import React from 'react';

export default function PizzaOrder({
  order,
  pizzas,
  removeFromOrder,
}) {
  return (
    <>
      <p>ORDER</p>
      <p>You have {order.length} items in your order</p>
    </>
  )
}
