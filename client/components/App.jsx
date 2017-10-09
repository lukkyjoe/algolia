import React from 'react'
let algolia = require('../search')
import Results from './Results.jsx'
import FoodTypes from './FoodTypes.jsx'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryValue: "",
      results: [],
      food_types: []
    }
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentWillMount(){
    this.search()
  }

  search(){
    algolia.helper.on('result', (content) => {
      console.log('content', content);
      this.setState({
        results: content.hits,
        food_types: content.getFacetValues('food_type') 
      })
    })
    algolia.helper.setQuery(this.state.queryValue).search()
  }

  handleChange(event){
    this.setState({queryValue: event.target.value})
    this.search();
  }

  handleSelectCuisine(){

  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>hi Algolia</h1>
        <form>
          <input value={this.state.queryValue} onChange={this.handleChange}/>
        </form>
        <div style={{display: 'flex'}}>
          <FoodTypes food_types={this.state.food_types}/>
          <Results rawResults={this.state.results}/>
        </div>

      </div>
    )
  }
}

// USE THE getFacetValues method