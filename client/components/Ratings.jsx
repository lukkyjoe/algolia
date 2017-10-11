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
      starsContainer.push(<img style={{height: '20px', width: '20px'}} key={`${i}f`} src="https://s3-us-west-1.amazonaws.com/algolia-graphics/plainStars.png"></img>);
    }
    for (let i = 0; i < emptyStars; i++){
      starsContainer.push(<img style={{height: '20px', width: '20px'}} key={`${i}e`} src="https://s3-us-west-1.amazonaws.com/algolia-graphics/star-empty.png"></img>);
    }
    return starsContainer;
  }
  return (
    <div onClick={() => {props.select(props.item)
        console.log('selected', props.item)
        }}>
      {renderStars()}
    </div>
  )
}

// this does not require props. 0 - 5 stars are constant

export default Ratings;