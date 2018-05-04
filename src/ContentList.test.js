import React from 'react';
import { shallow } from 'enzyme';
import ContentList from './ContentList';

const component = shallow(<ContentList params={{listType: 'series', letter: 'c'}} />);

describe('fetch error handler', () => {
    var response = {
        json: jest.fn(() => "returned")
    };
    it ('returns json method when ok', () => {
        response.ok = true;
        let expected = "returned",
            result = component.instance().errorHandler(response);

        expect(result).toEqual(expected);
    });
    it ('throws with status when not ok', () => {
        response.ok = false;
        response.statusText = 'faulty';
        let expected = "faulty",
            result = () => component.instance().errorHandler(response);

        expect(result).toThrowError(expected);
    });
})
