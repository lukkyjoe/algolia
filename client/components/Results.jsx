import React from 'react';

const Results = (props) => {
  const rawResults = props.rawResults;
  let list = rawResults.map((item, index) => <div key={index}> {item.name} : {item.food_type} </div>)
  return <div>{list}</div>
}

export default Results;

