import React from 'react';

const Results = (props) => {
  const rawResults = props.rawResults;
  let list = rawResults.map((item, index) => <div key={index}> <img src={item.image_url}></img>{item.name} : {item.food_type} : {item.stars_count} : {item.neighborhood} : {item.payment_options} </div>)
  
  
  
  return <div>{list}</div>
}

export default Results;

