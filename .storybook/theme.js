import { create } from '@storybook/theming';
import packageJSON from '../package.json';
import HDLogo from '../src/images/logos/hd-logo-dark.png';

export default create({
  base: 'dark',
  brandTitle: `IDS-UI ${packageJSON.version}`,
  brandUrl: 'https://github.com/partnersinbahamas',
  brandImage: HDLogo,
  brandTarget: '_self',
});
