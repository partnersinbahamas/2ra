import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';

import { ConnectOnChange } from '../../../.storybook/decorators';
import { story } from '../utils/variables/story';
import { Input } from './Input';

const meta = {
  title: 'Athomic/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    title: 'Input',
    value: 'value',
  },
  argTypes: {
    title: story.title,
    stile: story.stile,
    value: story.stringValue,
    error: story.stringError,
    disabled: story.disabled,
    type: story.inputType,
    onChange: story.onChange,
    className: story.className,
  },
  parameters: {
    docs: {
      description: {
        component: `
Please to style your custom input component use the mockup bellow.
### Guide styles
  .scss

    .className {
      &-heading {};
      &-label {};
      &-input {};
      &-error {};
      &-error-message {};
    };

.module.scss

    .className {
      [data-name='label'] {
        &[disabled] {};
      };
      [data-name='heading'] {};
      [data-name='input'] {
        &[error] {};
      };
      [data-name='error-message'] {};
    };
`,
      },
    },
  },
  decorators: [ConnectOnChange],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Default_disabled: Story = { args: { disabled: true } };
export const Default_error: Story = { args: { error: 'Error' } };
export const Primary: Story = { args: { stile: 'primary' } };
export const Primary_disabled: Story = {
  args: {
    stile: 'primary',
    disabled: true,
  },
};
export const Primary_error: Story = {
  args: {
    error: 'Error',
    stile: 'primary',
  },
};
export const Mute: Story = { args: { stile: 'mute' } };
export const Play: Story = {
  play: async context => {
    const canvas = within(context.canvasElement);

    const inputElement = canvas.getByRole('textbox');
    await userEvent.type(inputElement, ' play fn', { delay: 100 });
  },
};
