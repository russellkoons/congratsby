import React from 'react';
import MenuItemStyles from '../styles/MenuItemStyles';
import Img from 'gatsby-image';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({
  order,
  pizzas,
  removeFromOrder,
}) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const pizza = pizzas.find(pizza => pizza.id === singleOrder.id)
        return (
          <MenuItemStyles key={singleOrder.id}>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{singleOrder.id}</h2>
            <p>{formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}</p>
          </MenuItemStyles>
        )
      })}
    </>
  )
}
