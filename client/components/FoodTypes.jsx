import React from 'react';
import styles from './FoodTypes.css'

const FoodTypes = (props) => {
  const foodTypes = props.food_types;
  let list = foodTypes.map((item, index) => <div className={styles.food} key={index} onClick={() => {props.select(item.name)}}> {item.name}</div>)
  return <div><h3>Cuisine/Food Type</h3>{list}</div>
}

export default FoodTypes;