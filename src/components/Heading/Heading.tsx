import classNames from 'classnames';
import PropsTypes from 'prop-types';
import styles from './Heading.module.scss';

type TProps = React.ComponentProps<'hgroup'> & {
  level: TLevel;
};

const Heading: React.FC<TProps> = ({
  level,
  children = `Heading ${level}`,
  ...props
}) => {
  const { className, ...headingProps } = props;

  const tag = 'h';
  const tagName = `${tag}${level}`;
  const Tag = tagName as React.ElementType;

  return (
    <Tag
      {...headingProps}
      role="heading"
      aria-level={level}
      className={classNames(styles[`${tagName}`], className)}
    >
      {children}
    </Tag>
  );
};

export default Heading;

Heading.propTypes = {
  level: PropsTypes.any,
  className: PropsTypes.string,
  children: PropsTypes.node.isRequired,
};
