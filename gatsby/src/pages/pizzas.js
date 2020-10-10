import { graphql } from 'gatsby';
import React from 'react';

export default function PizzasPage() {
  return (
    <>
      <p>Getcha pizza here</p>
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
