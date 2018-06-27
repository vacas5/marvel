import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number,
  offset: PropTypes.number,
  total: PropTypes.number,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func
}

export default function Pagination({page, count, offset, total, onDecrement, onIncrement}) {
    const firstNumber = offset + 1,
     lastNumber = count + offset;
    // page is a zero based index
    return (
      <div>
        <p className="text_center">{firstNumber} &ndash; {lastNumber} of {total}</p>
        <div className="clearfix">
          {page > 0 && <button className="pagination_prev pull_left" type="button" onClick={onDecrement}>&#60; Previous Page</button>}
          {lastNumber < total && <button className="pagination_next pull_right" type="button" onClick={onIncrement}>Next Page &#62;</button>}
        </div>
      </div>
    )
}
