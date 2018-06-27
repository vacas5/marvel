import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
});

it('adds bottom class to card-image if it finds the image_not_available string in the thumbnail path', () => {
    const thumbnail = {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    };
    const component = shallow(<Card thumbnail={thumbnail} />);
    expect(component.find('.card-image').hasClass('bottom')).toBe(true);
})

it('uses the name prop as card-header text if type characters', () => {
    const type = 'characters';
    const name = 'Gambit';
    const component = shallow(<Card name={name} type={type} />);
    expect(component.find('.card-header').text()).toBe(name);
})

it('uses the title prop as card-header text if type series', () => {
    const type = 'series';
    const title = 'Death of Superman';
    const component = shallow(<Card title={title} type={type} />);
    expect(component.find('.card-header').text()).toBe(title);
})
