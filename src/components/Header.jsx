import React from 'react';
import { connect } from 'react-redux';

const Header = ({ image, name, price }) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    image: state.car.image,
    name: state.car.name,
    price: state.car.price
  };
}

export default connect(mapStateToProps, {})(Header);
