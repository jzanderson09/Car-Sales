import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({ addFeatures }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {addFeatures.length ? (
        <ol type="1">
          {addFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
