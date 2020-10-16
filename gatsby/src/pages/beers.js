import { graphql } from 'gatsby';
import React from 'react';

export default function BeersPage({ data }) {
  return (
    <>
      <h2 className="center">
        We have {data.beers.nodes.length} Beers Available. Dine in Only!
      </h2>
      <div>
        {data.beers.nodes.map((beer) => {
          console.log(beer);
          return (
            <div>
              <h3>{beer.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
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
