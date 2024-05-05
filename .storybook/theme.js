import { create } from '@storybook/theming';
import packageJSON from '../package.json';
import idsLogo from '../src/images/ids-logo-dark.png';

export default create({
  base: 'dark',
  brandTitle: `IDS-UI ${packageJSON.version}`,
  brandUrl: 'https://github.com/partnersinbahamas',
  brandImage: idsLogo,
  brandTarget: '_self',
});
