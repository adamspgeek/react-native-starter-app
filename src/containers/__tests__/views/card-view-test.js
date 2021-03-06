/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CardView from '@containers/recipes/Card/CardView';

/**
 * Check if CardView renders correctly
 * and asserting it to the matching snapshot
 */

it('CardView renders correctly', () => {
  const tree = renderer.create(
    <CardView
      image={'http://placehold.it/300x100'}
      title={'A Cake'}
      content={'It\'s so delicious!'}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
