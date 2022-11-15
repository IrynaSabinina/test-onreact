import PropTypes from 'prop-types';

export const Main = ({ children }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
