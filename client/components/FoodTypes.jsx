import React from 'react';
import styles from './App.css'

const FoodTypes = (props) => {
  const foodTypes = props.food_types;
  let list = foodTypes.map((item, index) => <div className={styles.filter} key={index} onClick={() => {props.select(item.name)}}> <div>{item.name}</div> <div className={styles.facetCount}>({item.count})</div></div>)
  return <div><h3>Cuisine/Food Type</h3>{list}</div>
}

export default FoodTypes;