import React from 'react';

const Ratings = (props) => {
  const stars = props.stars_count;
  let list = stars.map((item, index) => <div key={index} onClick={() => {props.select(item)
    console.log('bar')
    }}> {item}</div>)
  return <div>{list}</div>
}

export default Ratings;