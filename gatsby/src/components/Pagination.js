import { Link } from 'gatsby';
import React from 'react';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNext = nextPage <= totalPages;
  const hasPrev = prevPage >= 1;
  return (
    <div>
      <Link disabled={!hasPrev} to={`${base}/${prevPage}`}>
        &#8592; Prev
      </Link>
      <Link disabled={!hasNext} to={`${base}/${nextPage}`}>
        Next &#8594;
      </Link>
    </div>
  );
}
