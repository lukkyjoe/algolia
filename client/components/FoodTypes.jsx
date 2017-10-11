import React from 'react';

const FoodTypes = (props) => {
  const foodTypes = props.food_types;
  let list = foodTypes.map((item, index) => <div key={index} onClick={() => {props.select(item.name)}}> {item.name}: {item.count}</div>)
  return <div><h3>Cuisine/Food Type</h3>{list}</div>
}

export default FoodTypes;