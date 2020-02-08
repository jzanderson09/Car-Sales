import React from 'react';
import { connect } from 'react-redux';
import { buyFeature } from '../actions';


const AdditionalFeature = ({ feature, buyFeature }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => buyFeature(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { buyFeature })(AdditionalFeature);
