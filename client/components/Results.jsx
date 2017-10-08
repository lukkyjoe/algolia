import React from 'react';

const Results = (props) => {
  const rawResults = props.rawResults;
  let list = rawResults.map((item, index) => <div key={index}> {item.food_type} </div>)
  return list
}

export default Results;

