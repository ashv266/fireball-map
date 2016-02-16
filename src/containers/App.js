// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FireballMapApp from '../components/fireballMapApp';
import * as MapActions from '../actions/mapActions';

class App extends React.Component {
  render() {
    const { fireballMapAppState, actions } = this.props;

    return (
        <FireballMapApp fireballMapAppState={fireballMapAppState} actions={actions} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  fireballMapAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fireballMapAppState: state.fireballMapAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MapActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
