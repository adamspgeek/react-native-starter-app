/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Soon from '@general/Placeholder';

/**
 * Check if placeholder renders correctly
 * and asserting it to the matching snapshot
 */
it('Soon renders correctly', () => {
  const tree = renderer.create(
    <Soon navigator={{ push: () => {} }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
