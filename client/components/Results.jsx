import React from 'react';

const Results = (props) => {
  const rawResults = props.rawResults;
  let list = rawResults.map((item, index) => <SingleResult item={item} key={index}/>)
  return <div>{list}</div>
}

const SingleResult = (props) => {
  let roundDownToHalf = (num) => {
    return Math.floor(num*2)/2;
  }
  let renderStarsScore = () => {
    let starsArray = [];
    let targetScore = roundDownToHalf(props.item.stars_count);
    console.log('targetScore', targetScore)
    let fullStars = Math.floor(targetScore);
    console.log('fullStars', fullStars)
    let halfStar = (targetScore % 1) > 0 ? 1 : 0 
    console.log('halfStar', halfStar)
    let emptyStars = 5 - fullStars - halfStar;
    console.log('emptyStars', emptyStars)
    for (let i = 0; i < fullStars; i++){
      starsArray.push(<img style={{height: '20px', width: '20px'}} key={`${i}f`} src="https://s3-us-west-1.amazonaws.com/algolia-graphics/plainStars.png"></img>)
    }
    if (halfStar) {
      starsArray.push(<img style={{height: '20px', width: '20px'}} key={`${halfStar}h`} src="https://s3-us-west-1.amazonaws.com/algolia-graphics/halfstar-whole.png"></img>)
    }
    for (let i = 0; i < emptyStars; i++){
      starsArray.push(<img style={{height: '20px', width: '20px'}} key={`${i}e`} src="https://s3-us-west-1.amazonaws.com/algolia-graphics/star-empty.png"></img>)
    }
    console.log(starsArray);
    return starsArray;
  }
  return(
    <div style={{display: 'flex'}}>
      <div><img src={props.item.image_url} style={{width: '80px', height: '80px'}}></img></div> 
      <div>
        <h1>{props.item.name}</h1>
        <div style={{display: 'flex'}}>
          <span>{props.item.stars_count}</span>
          <span>({props.item.reviews_count})</span>
          {renderStarsScore()}
        </div>
        <div style={{display: 'flex'}}>
          <span>{props.item.food_type} | </span>
          <span>{props.item.neighborhood} |</span>
          <span>{props.item.price_range} |</span>
        </div>
      </div> 
    </div>
  )
}

export default Results;

