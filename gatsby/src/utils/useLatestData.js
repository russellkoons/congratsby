import { useEffect, useState } from 'react';

function useLatestData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [slicemasters, setSlicemasters] = useState();
  // use a side effect to fetch the data from the graphql endpoint
  useEffect(function() {
    // when the component loads, fetch the data
    
  });
}
