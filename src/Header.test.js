import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('Opens menu when clicked', () => {
  const component = shallow(
    <Header />
  );

  expect(component.find('.navigation-menu').hasClass('show')).toEqual(false);

  component.find('.navigation-menu-button').simulate('click');

  expect(component.find('.navigation-menu').hasClass('show')).toEqual(true);
});
