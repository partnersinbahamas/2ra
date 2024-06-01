import React from 'react';
import PropsTypes from 'prop-types';
import TExtendedComponentProps from '../utils/types/props/extendedProps';

type TText = React.ComponentProps<'span'> &
  TExtendedComponentProps & { children: React.ReactNode };

const Text: React.FC<TText> = ({ children, ...props }) => (
  <span {...props}>{children}</span>
);

Text.propTypes = { children: PropsTypes.node.isRequired };
export default Text;
