import { useContext } from "react";
import OrderContext from "../components/OrderContext";

export default function usePizza({ pizzas, inputs }) {
  // Create some state to hold our order
  // We got rid of this line because we moved useState to the provider
  // const [order, setOrder] = useState([]);
  // Now we can access both our state and our updater function (setOrder) via context
  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
  // Run when someone submits the forms
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  }
}
