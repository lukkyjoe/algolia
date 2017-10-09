import React from 'react';

const FoodTypes = (props) => {
  const foodTypes = props.food_types;
  let list = foodTypes.map((item, index) => <div key={index}> {item.name} </div>)
  return <div>{list}</div>
}

export default FoodTypes;