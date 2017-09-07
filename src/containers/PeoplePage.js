import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllPeople } from '../actions/apiActions';

class PeoplePage extends Component {

 componentDidMount() {
    this.props.dispatch(findAllpeople());
  }
  componentDidUpdate() {
     const { people } = this.props;
   }
  render() {
    const { people } = this.props;

    return (
      <div>
      {
        people ?
        people.map((pupil, index) => {
          return (
            <p key={index}>
            {pupil.title}
            </p>
          )
        })
        :
        null
      }
      </div>
    )
  }
}

const mapStateToProps = ({ people }) => ({
  people : people.people
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(PeoplePage);
