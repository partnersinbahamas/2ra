import { Meta, StoryObj} from "@storybook/react";
import { User } from "./User";
import { halfWidth } from '../../../.storybook/decorators';
/**
 * Separate user component.
 */

const meta = {
  title: 'Displays/User',
  component: User,
  tags: ['autodocs'],
  args: {
    size: 'medium',
    user: await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json()
  },
  argTypes: {
    withBackGround: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] }
  },
  
} satisfies Meta<typeof User>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}

export const Background: Story = {
  args: {
    withBackGround: true,
    backgroundColor: '#eee',
  }
}

export const Half: Story = {
  args: {
    withBackGround: true,
    backgroundColor: '#eee',
  },
  decorators: [halfWidth],
}
