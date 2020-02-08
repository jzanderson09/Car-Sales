import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = ({ features }) => {
  if (features.length > 0) {
    return (
      <div className="content">
        <h6>Added features:</h6>
        <ol type="1">
          {features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
    </div>
    );
  }
  else {
    return (
      <div className="content">
        <p>You can purchase items from the store.</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  };
}

export default connect(mapStateToProps, {})(AddedFeatures);
