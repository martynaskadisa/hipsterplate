import * as React from 'react';
import * as renderer from 'react-test-renderer';
import About from '../index';

describe('About scene', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<About />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
