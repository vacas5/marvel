import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';

it('renders without crashing', () => {
  shallow(<CharacterList params={{}} />);
});

it('Increments page when clicked', () => {
  const component = shallow(
    <CharacterList params={{}} />
  ), buttonClass = '.pull_right';

  // expect button to not be rendered with no data
  expect(component.find(buttonClass).length).toEqual(0);

  component.setState({
      total: 89,
      count: 20
  })

  expect(component.find(buttonClass).length).toEqual(1);

  component.find(buttonClass).simulate('click');

  expect(component.state('page')).toEqual(1);
});

it('Decrements page when clicked', () => {
  const component = shallow(
    <CharacterList params={{}} />
  ), buttonClass = '.pull_left';

  // expect button to not be rendered with no data
  expect(component.find(buttonClass).length).toEqual(0);

  component.setState({
      total: 89,
      count: 20,
      page: 2
  });

  expect(component.find(buttonClass).length).toEqual(1);

  component.find(buttonClass).simulate('click');

  expect(component.state('page')).toEqual(1);
});
