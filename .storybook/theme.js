import { create } from '@storybook/theming';
import packageJSON from '../package.json';
import hdLogo from '../src/images/hd-logo-dark.png';

export default create({
  base: 'dark',
  brandTitle: `2RA-UI ${packageJSON.version}`,
  brandUrl: 'https://github.com/partnersinbahamas',
  brandImage: hdLogo,
  brandTarget: '_self',
});
