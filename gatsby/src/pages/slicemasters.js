import { graphql } from 'gatsby';
import React from 'react';

export default function SlicemastersPage() {
  return (
    <>
      <p>See all of our Slicemasters!</p>
    </>
  );
}

export const query = graphql`
  query {
    slicemasters: allSanityPerson {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
