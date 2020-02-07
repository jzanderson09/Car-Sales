import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions';


const AdditionalFeature = ({ feature, buyItem }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => buyItem(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { buyItem })(AdditionalFeature);
