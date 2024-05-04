// NOTE: story controls-options object;
export const story = {
  // controles
  name: { control: 'text' },
  abbreviation: { control: 'text' },
  title: { control: 'text' },
  stringValue: { control: 'text' },
  badged: { control: 'boolean' },
  disabled: { control: 'boolean' },
  stringError: { control: 'text' },
  backgroundColor: { control: 'color' },
  className: { control: 'text' },
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
  inputType: {
    control: 'radio',
    options: ['text', 'password', 'email', 'number'],
  },

  //handles
  onClick: { action: 'clicked' },
  onChange: { action: 'changed' },
};
