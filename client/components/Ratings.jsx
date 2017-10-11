import React from 'react';

const Ratings = (props) => {
  const stars = props.stars_count;
  let list = stars.map((item, index) => <StarCount item={item} key={index} select={props.select}/>)
  return <div><h3>Ratings</h3>{list}</div>
}

const StarCount = (props) => {
  let emptyStars = 5 - props.item; 
  let renderStars = () => {
    let starsContainer = [];
    for (let i = 0; i < props.item; i++){
      starsContainer.push(<img key={`${i}f`} src="../../resources/graphics/stars-plain.png"></img>);
    }
    for (let i = 0; i < emptyStars; i++){
      starsContainer.push(<img key={`${i}e`} src="../../resources/graphics/star-empty.png"></img>);
    }
    return starsContainer;
  }
  return (
    <div onClick={() => {props.select(props.item)
        console.log('selected', props.item)
        }}> {props.item}
      {renderStars()}
    </div>
  )
}

// this does not require props. 0 - 5 stars are constant

export default Ratings;