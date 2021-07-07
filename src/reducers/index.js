import { BUY_FEATURE, REMOVE_FEATURE } from '../actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case BUY_FEATURE:
      console.log('BUY_FEATURE action initated!');
      if (state.car.features.includes(action.payload) === false) {
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          }
        };
      }
      return state;

    case REMOVE_FEATURE:
      console.log('REMOVE_FEATURE action initiated!');
      if (state.car.features.length > 0) {
        const updatedFeatures = state.car.features.filter(feature => feature !== action.payload);
        // if updatedFeatures === state.car.features, that means the feature is not in the array; nothing was filtered out.
        if (updatedFeatures === state.car.features) {
          return state;
        }
        return {
          ...state,
          additionalPrice: state.additionalPrice - action.payload.price,
          car: {
            ...state.car,
            features: updatedFeatures
          }
        };
      }
      return state;

    default:
      return state;

  }
};

