import React, { useEffect, useState } from 'react';
import { Decorator } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

export const halfWidth: Decorator = (StoryFn) => {
  return (
    <div style={{width: '50%'}}>
      <StoryFn/>
    </div>
  )
};

export const ConnectOnChange: Decorator = (StoryFn, ctx) => {
  const [{value}, setState] = useState(ctx.args);
  const [_, setArgs] = useArgs();

  useEffect(() => {
    setState((prev) => ({...prev, value: ctx.args.value}));
  }, [ctx.args.value])
  

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setState((prev) => ({...prev, value}));

    if (ctx.args.value !== undefined) {
      setArgs({value});
    }
  }

  return <StoryFn args={{...ctx.args, value, onChange}} />
}

export const globalDecorators: Decorator[] = [];