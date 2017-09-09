import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findEntityFromUrl } from '../../actions/apiActions';

class EntityLink extends Component {

 componentDidMount() {
   const {entityLink} = this.props;
   console.log(entityLink);
    this.props.dispatch(findEntityFromUrl(entityLink));
  }

  render() {
    const { entity } = this.props;

    return (
      <div></div>
    )
  }
}

const mapStateToProps = ({ }) => ({
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(EntityLink);
