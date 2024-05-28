import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { story } from '../../utils/variables/story';

const meta = {
  title: 'Athomic/Buttons/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    size: story.size,
    type: story.buttonType,
    onClick: story.onClick,
    className: story.className,
    title: story.title,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Please to style your custom input component use the mockup bellow.
### Guide styles
  .scss

  .module.scss

  use the "button" prefix to make the class more specific

    button.button {}  
    `,
      },
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = {};
export const Primary: TStory = { args: { stile: 'primary' } };
export const Mute: TStory = { args: { stile: 'mute' } };
