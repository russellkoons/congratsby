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
  console.log(pageSize);
  return (
    <div>
      <Link disabled={!hasPrev} to={`${base}/${prevPage}`}>
        &#8592; Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link to={`${base}/${i + 1}`}>{i + 1}</Link>
      ))}
      <Link disabled={!hasNext} to={`${base}/${nextPage}`}>
        Next &#8594;
      </Link>
    </div>
  );
}
