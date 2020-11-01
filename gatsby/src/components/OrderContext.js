import { useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

// create an order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // we need to stick state in here
  const [order, setOrder] = useState('ass');
  return (
    <OrderContext.Provider>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
