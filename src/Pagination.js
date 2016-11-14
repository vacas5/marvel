import React from 'react';

function Pagination({page, count, offset, total, handleDecrement, handleIncrement}) {
    const firstNumber = offset + 1,
      lastNumber = count + offset;
    // page is a zero based index
    return (
      <div>
        <p className="text_center">{firstNumber} &ndash; {lastNumber} of {total}</p>
        <div className="clearfix">
          {page > 0 && <button className="pagination_prev pull_left" type="button" onClick={handleDecrement}>&#60; Previous Page</button>}
          {lastNumber < total && <button className="pagination_next pull_right" type="button" onClick={handleIncrement}>Next Page &#62;</button>}
        </div>
      </div>
    )
}

Pagination.propTypes = {
  page: React.PropTypes.number,
  count: React.PropTypes.number,
  offset: React.PropTypes.number,
  total: React.PropTypes.number,
  handleDecrement: React.PropTypes.func,
  handleIncrement: React.PropTypes.func
}

export default Pagination;
