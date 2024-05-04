// NOTE: story controls-options object;
export const story = {
  // controles
  name: { control: 'text' },
  abbreviation: { control: 'text' },
  badged: { control: 'boolean' },
  disabled: { control: 'boolean' },
  backgroundColor: { control: 'color' },
  src: { control: 'text' },

  // options
  stile: {
    control: 'inline-radio',
    options: ['primary', 'default', 'mute'],
  },
  size: {
    control: 'inline-radio',
    options: ['small', 'medium', 'large'],
  },
  status: {
    control: 'inline-radio',
    options: ['online', 'default', 'not-here', 'busy', 'sleep', 'primary'],
  },

  //handles
  onClick: { control: 'changed' },
};
