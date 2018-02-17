import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Home from '../index';

describe('Home scene', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
