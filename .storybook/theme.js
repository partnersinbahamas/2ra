import { create } from '@storybook/theming';
import packageJSON from '../package.json';
import turaLogo from '../src/images/logos/2RA.svg';

export default create({
  base: 'dark',
  brandTitle: `IDS-UI ${packageJSON.version}`,
  brandUrl: 'https://github.com/partnersinbahamas',
  brandImage: turaLogo,
  brandTarget: '_self',
});
