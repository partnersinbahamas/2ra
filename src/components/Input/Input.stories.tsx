import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';

import { ConnectOnChange } from '../../../.storybook/decorators';
import { Input } from './Input';

const meta = {
  title: 'Athomic/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    stile: {
      control: 'inline-radio',
      options: ['primary'],
    },
    value: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'radio', options: ['text', 'password', 'email', 'number'] },
    onChange: { action: 'changed' },
    className: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
Please to style your custom input component use the mockup bellow.
### Guide styles

    .className {
      [data-name="heading"] {}
      [data-name="label"] {}
      [data-name="input"] {}
      [data-name="error-message"] {}
      
      &-error {}
    }
`,
      },
    },
  },
  decorators: [ConnectOnChange],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: 'Input',
    value: 'value',
  },
};

export const Primary: Story = {
  args: {
    stile: 'primary',
    value: 'Primary',
    title: 'Input Primary',
  },
};

export const Error: Story = {
  args: {
    title: 'Handled error',
    error: '...pzzz..pz',
  },
};
export const Play: Story = {
  args: {
    title: 'Play function',
  },
  play: async context => {
    const canvas = within(context.canvasElement);

    const inputElement = canvas.getByRole('textbox');
    await userEvent.type(inputElement, ' play fn', { delay: 100 });
  },
};
