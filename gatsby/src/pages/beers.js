import { graphql } from 'gatsby';
import React from 'react';

export default function BeersPage({ data }) {
  
  return (
    <>
      <p>This is where the beer is</p>
    </>
  );
}

export const query = graphql`
  query {
    allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
