import React from 'react';
import { shallow } from 'enzyme';
import GrandChild from '../../src/components/GrandChild';

describe('GrandChild should render as expected', () => {
  it('module should render correct JSX', () => {
    const renderedModule = shallow(<GrandChild />);
    expect(renderedModule.find('div')).toMatchSnapshot();
  });
});
