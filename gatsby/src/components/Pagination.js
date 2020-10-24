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
  return (
    <div>
      <Link to={`${base}/${currentPage - 1}`}></Link>
    </div>
  );
}
