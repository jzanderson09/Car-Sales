import { BUY_ITEM, REMOVE_FEATURE } from '../actions';

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

    case BUY_ITEM:
      // console.log(action.payload);
      if (state.features && state.features.filter(feature => feature.name !== action.payload.name)) {
        return {
          ...state,
          features: [...state.features, action.payload],
          car: {
            ...state.car,
            price: state.car.price + action.payload.price
          }
        };
      }
      else {
        return {
          ...state,
          features: [action.payload],
          car: {
            ...state.car,
            price: state.car.price + action.payload.price
          }
        };
      }

    case REMOVE_FEATURE:
      // console.log(action.payload);
      if (state.features) {
        const updatedFeatures = state.features.filter(feature => feature.name !== action.payload.name);
        // console.log(updatedFeatures);
        return {
          ...state,
          features: updatedFeatures,
          car: {
            ...state.car,
            price: state.car.price - action.payload.price
          }
        };
      }
      else {
        return state;
      }
    default:
      return state;
  }
};

