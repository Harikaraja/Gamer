import React, { useState } from 'react';
import '../assets/styles/pagination.css';

const Pagination = ({ data, pageHandler }) => {
  const [currentPage, setCurrentPage] = useState(1);

  let pageNumbers = [];

  for (let i = 1; i < Math.ceil(data.length / 3) + 1; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (page) => {
    if (page === '<' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      pageHandler(currentPage - 1);
    } else if (page === '>' && currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      pageHandler(currentPage + 1);
    } else if (typeof page === 'number') {
      setCurrentPage(page);
      pageHandler(page);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }} className='pagination-container'>
      <div
        className={`pagebutton${currentPage === 1 ? ' disabled' : ''}`}
        onClick={() => handlePageClick('<')}
      >
        {'<'}
      </div>
      {pageNumbers.map((page) => (
        <div
          key={page}
          className={`pagebutton${currentPage === page ? ' active' : ''}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </div>
      ))}
      <div
        className={`pagebutton${currentPage === pageNumbers.length ? ' disabled' : ''}`}
        onClick={() => handlePageClick('>')}
      >
        {'>'}
      </div>
    </div>
  );
};

export default Pagination;
