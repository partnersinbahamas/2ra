import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/test";

import { ConnectOnChange } from '../../../.storybook/decorators';
import { Input } from "./Input";

const meta = {
  title: 'Athomic/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'radio',
      options: ['text', 'password', 'email', 'number']
    },
    onChange: { action: 'changed' },
    className: { control: 'text' },
    stile: { control: 'inline-radio', options: ['primary'] },
  },
  parameters: {
    docs: {
      description: {
        component:
`
Please to style your custom input component use the mockup bellow.
### Guide styles

    .your-class-name {
      /* use "heading" data-name to style h3 element *\
      [id="heading"] => css.styles

      /* use "label" data-name to style label element *\
      [id="label"] => css.styles
      
      /* use "input" data-name to style input element *\

      [id="input"] {
        => css.styles
        &:focus {
          => css.styles
        }
      }

      /* use "error-message" data-name to style span element *\

      [id="error-message"] => css.styles

      /* use .your-class-name-error className
        to style "input" element on error handler *\


      &-error {
        !warning! => use !important here
        => css.styles
      }
    }
`
      }
    }
  },
  decorators: [ConnectOnChange],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: 'Input',
    value: 'value',
  }
}
export const Error: Story = {
  args: {
    title: 'Handled error',
    error: '...pzzz..pz'
  }
}
export const Play: Story = {
  args: {
    value: '',
  },
  play: async (context) => {
    const canvas = within(context.canvasElement);

    const inputElement = canvas.getByDisplayValue('Play');
    await userEvent.type(inputElement, ' play fn', { delay: 100 });
  }
}