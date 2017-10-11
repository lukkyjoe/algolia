import React from 'react';

const Results = (props) => {
  const rawResults = props.rawResults;
  let list = rawResults.map((item, index) => <SingleResult item={item} key={index}/>)
  return <div>{list}</div>
}

const SingleResult = (props) => {
  return(
    <div style={{display: 'flex'}}>
      <div><img src={props.item.image_url} style={{width: '80px', height: '80px'}}></img></div> 
      <div>
        <h1>{props.item.name}</h1>
        <div style={{display: 'flex'}}>
          <span>{props.item.stars_count}</span>
          <span>({props.item.reviews_count})</span>
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

