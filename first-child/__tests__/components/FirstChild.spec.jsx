import React from 'react';
import { shallow } from 'enzyme';
import FirstChild from '../../src/components/FirstChild';

describe('FirstChild should render as expected', () => {
  it('module should render correct JSX', () => {
    const renderedModule = shallow(<FirstChild />);
    expect(renderedModule.find('div')).toMatchSnapshot();
  });
});
