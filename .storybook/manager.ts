import { addons } from '@storybook/manager-api';

import yourTheme from './theme';
import { version } from '../package.json';

addons.setConfig({
  theme: yourTheme,
});

window.addEventListener('load', function (event) {
  // have to wait for load, otherwise the change is removed when the stories finish loading!?

  const versionTitle = document.createElement('p');
  const textNode = document.createTextNode(`v. ${version}`);
  versionTitle.appendChild(textNode);

  const sidebarHeader = document.getElementsByClassName('sidebar-header')[0];
  if (!sidebarHeader?.parentElement) return;
  sidebarHeader.parentElement.insertBefore(
    versionTitle,
    sidebarHeader.nextSibling
  );
});
