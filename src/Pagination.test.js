import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pagination />, div);
});

describe('previous button', () => {
    it('is visible if page is greather than zero', () => {
        const component = shallow(
          <Pagination page={1} offset={20} />
        );
        const expected = 1,
            actual = component.find('.pagination_prev').length;

        expect(expected).toEqual(actual);
    });

    it('is invisible if page is zero', () => {
        const component = shallow(
          <Pagination page={0} offset={0} />
        );
        const expected = 0,
            actual = component.find('.pagination_prev').length;

        expect(expected).toEqual(actual);
    });

    it('triggers on decrement function when clicked', () => {
        const clickHandler = jest.fn();
        const component = shallow(
          <Pagination page={1} offset={20} onDecrement={clickHandler} />
        );

        component.find('.pagination_prev').simulate('click');

        expect(clickHandler).toHaveBeenCalled();
    });
});

describe('next button', () => {
    it('is visible if offset plus count is less than total', () => {
        const component = shallow(
          <Pagination page={1} offset={20} count={20} total={50} />
        );
        const expected = 1,
            actual = component.find('.pagination_next').length;

        expect(expected).toEqual(actual);
    });

    it('is invisible if offset plus count equals total', () => {
        const component = shallow(
          <Pagination page={1} offset={20} count={14} total={34} />
        );
        const expected = 0,
            actual = component.find('.pagination_next').length;

        expect(expected).toEqual(actual);
    });

    it('triggers on increment function when clicked', () => {
        const clickHandler = jest.fn();
        const component = shallow(
          <Pagination page={1} offset={20} count={20} total={50} onIncrement={clickHandler} />
        );

        component.find('.pagination_next').simulate('click');

        expect(clickHandler).toHaveBeenCalled();
    });
});
