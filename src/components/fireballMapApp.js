import React, {PropTypes} from 'react';

const FireballMapApp = (props) => {

  const settings = props.fireballMapAppState;

  return (
    <div>
      <h2>Fireball Map Application</h2>
      [ Map Placeholder ]
    </div>
  );
};

FireballMapApp.propTypes = {
  actions: PropTypes.object.isRequired,
  fireballMapAppState: PropTypes.object.isRequired
};

export default FireballMapApp;
