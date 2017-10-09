import React from 'react';

const Ratings = (props) => {
  const ratings = props.ratings;
  let list = ratings.map((item, index) => <div key={index} onClick={() => {console.log('clicked', item)}}> {item}</div>)
  return <div>{list}</div>
}

export default Ratings;