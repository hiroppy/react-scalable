import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Sample from './Sample';

storiesOf('no options', module)
  .add('default', () => (
    <Sample />
  ));

storiesOf('align', module)
  .add('center', () => (
    <Sample width={500} />
  ))
  .add('left', () => (
    <Sample
      align="left"
      width={500}
    />
  ))
  .add('right', () => (
    <Sample
      align="right"
      width={500}
    />
  ));

storiesOf('verticalAlign', module)
  .add('center', () => (
    <Sample height={300} />
  ))
  .add('top', () => (
    <Sample
      height={300}
      verticalAlign="top"
    />
  ))
  .add('bottom', () => (
    <Sample
      height={300}
      verticalAlign="bottom"
    />
  ));

storiesOf('containerHeight', module)
  .add('fixed', () => (
    <Sample
      width={500}
      containerHeight="fixed"
    />
  ))
  .add('auto', () => (
    <Sample
      width={500}
      containerHeight="auto"
    />
  ));

storiesOf('scale', module)
  .add('minScale', () => (
    <Sample
      height={300}
      width={100}
      minScale={0.2}
    />
  ))
  .add('maxScale', () => (
    <Sample
      height={500}
      width={500}
      maxScale={0.5}
    />
  ));
