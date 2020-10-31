export default function calculateOrderTotal(order, pizzas) {
  // loop over each item in the order
  const total = order.reduce((acc, singleOrder) => {
    const pizza = pizzas.find(pizza => pizza.id === singleOrder.id);
  }, 0);
  // calculate the total for that pizza
  // add that total to the running total
}
