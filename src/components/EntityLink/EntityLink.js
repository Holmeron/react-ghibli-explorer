import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findEntityByUrl } from '../../actions/apiActions';

class EntityLink extends Component {

 componentDidMount() {
   const {entityLink} = this.props;
    this.props.dispatch(findEntityByUrl(entityLink));
  }

  render() {
    const { entity } = this.props;

    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = ({ baseEntity }) => ({
  entity : baseEntity.entity
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(EntityLink);
