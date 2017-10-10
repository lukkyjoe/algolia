import React from 'react';

const Ratings = (props) => {
  const stars = props.stars_count;
  let list = stars.map((item, index) => <StarCount item={item} key={index} select={props.select}/>)
  return <div>{list}</div>
}

const StarCount = (props) => {
  return (
    <div onClick={() => {props.select(props.item)
        console.log('selected', props.item)
        }}> {props.item}
      <img src="../../resources/graphics/stars-icons.png"></img>
    </div>
  )
}

export default Ratings;