import { Meta, StoryObj } from '@storybook/react';

import me from '../../images/me.png';
import { Avatar } from '../Avatar/Avatar';
import { story } from '../utils/variables/story';

/**
 * Avatar conponent with user picture and fullname.
 */

const meta = {
  title: 'Athomic/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    abbreviation: 'EM',
    anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
    stile: 'default',
  },
  argTypes: {
    firstName: story.name,
    lastName: story.name,
    abbreviation: story.abbreviation,
    backgroundColor: story.backgroundColor,
    badged: story.badged,
    disabled: story.disabled,
    src: story.src,
    onClick: story.onClick,
    stile: story.stile,
    size: story.size,
    status: story.status,
    badgeContent: { control: 'text' },
    anchorOrigin: {
      control: {
        type: 'object', // Указываем, что это объект
        keys: {
          horizontal: {
            type: 'select',
            options: ['left', 'right'],
          },
          vertical: {
            type: 'select',
            options: ['top', 'bottom'],
          },
        },
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Please to style your custom input component use the mockup bellow.
### Guide styles
  .scss

  use the "div" prefix to make the class more specific

    div.className {
      &-avatar {
        &[aria-disabled='true'] {}
      }
      &-badge {
        &[aria-disabled='true'] {}
        &-"status" {}
      }
    }

.module.scss

    .className {
      [data-name="avatar"] {
        &[aria-disabled="true"] {}
      };

      [data-name="badge"] {
        &[aria-disabled="true"] {}
      };

      [data-name="abbreviation"] {}
      [data-status="primary"] {}
    };
`,
      },
    },
  },
} satisfies Meta<typeof Avatar>;
export default meta;
type TStory = StoryObj<typeof meta>;

export const Muted: TStory = {
  args: {
    size: 'medium',
    firstName: 'Steve',
    lastName: 'Jobs',
    stile: 'mute',
  },
};
export const Default: TStory = {
  args: {
    size: 'medium',
    firstName: 'Steve',
    lastName: 'Jobs',
  },
};
export const Disabled: TStory = {
  args: {
    size: 'medium',
    disabled: true,
    badged: true,
  },
};
export const Primary: TStory = {
  args: {
    size: 'medium',
    stile: 'primary',
    status: 'primary',
    badged: true,
  },
};
export const PrimaryDisabled: TStory = {
  args: {
    size: 'medium',
    stile: 'primary',
    status: 'primary',
    badged: true,
    disabled: true,
  },
};
export const Badged: TStory = {
  args: {
    size: 'medium',
    badged: true,
  },
};
export const Online: TStory = {
  args: {
    size: 'medium',
    status: 'online',
    badged: true,
  },
};
// status stories
export const NotHere: TStory = {
  args: {
    size: 'medium',
    status: 'not-here',
    badged: true,
  },
};
export const Busy: TStory = {
  args: {
    size: 'medium',
    status: 'busy',
    badged: true,
  },
};
export const Sleep: TStory = {
  args: {
    size: 'medium',
    status: 'sleep',
    badged: true,
  },
};
// status stories
export const BackgroundImage: TStory = {
  args: {
    size: 'large',
    src: me,
  },
};
