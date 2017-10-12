import React from 'react';
import styles from './App.css'

const FoodTypes = (props) => {
  const foodTypes = props.food_types;
  let list = foodTypes.map((item, index) => <SingleFoodType item={item} key={index} select={props.select}/>)
  return <div><h3>Cuisine/Food Type</h3>{list}</div>
}

const SingleFoodType = (props) => {
  return (
    <div className={styles.filter} onClick={() => {props.select(props.item.name)}}> 
      <div>{props.item.name}</div> <div className={styles.facetCount}>{props.item.count}</div>
    </div>
  )
}

export default FoodTypes;