import React from 'react'
import styles from './App.css'
import classnames from 'classnames/bind'

const FoodTypes = (props) => {
  const foodTypes = props.food_types;
  let list = foodTypes.map((item, index) => <SingleFoodType item={item} key={index} select={props.select} hover={props.hover}/>)
  return <div><h3>Cuisine/Food Type</h3>{list}</div>
}

let cx = classnames.bind(styles);

class SingleFoodType extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.leaveHover = this.leaveHover.bind(this);
  }

  handleHover(){
    this.setState({hover: true})
  }

  leaveHover(){
    this.setState({hover: false})
  }

  render(){
    let cuisineHighlight = cx({highlight: this.state.hover});
    let cuisineFacetCountHighlight = cx({facetCountHighlight: this.state.hover})
    let filterContainer = cx({filter: true, highlightBackground: this.state.hover})
    return (
      <div className={filterContainer} onMouseOver={this.handleHover} onMouseLeave={this.leaveHover} onClick={() => {this.props.select(this.props.item.name)}}> 
        <div className={cuisineHighlight}>{this.props.item.name}</div> <div className={cuisineFacetCountHighlight}>{this.props.item.count}</div>
      </div>
    )
  }
}
//each individual foodtype has its own state to show highlight/active status

export default FoodTypes;