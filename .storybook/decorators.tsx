import React from 'react';
import { Decorator } from '@storybook/react';

export const halfWidth: Decorator = (StoryFn) => {
  return (
    <div style={{width: '50%'}}>
      <StoryFn/>
    </div>
  )
};

export const globalDecorators: Decorator[] = [];