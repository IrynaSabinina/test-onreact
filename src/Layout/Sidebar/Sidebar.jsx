import PropTypes from 'prop-types';

export const Sidebar = ({ children }) => {
  return <aside>{children}</aside>;
};

Sidebar.propTypes = {
  children: PropTypes.node,
};
