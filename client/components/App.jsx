import React from 'react'
let algolia = require('../search')
import Results from './Results.jsx'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryValue: "",
      facets: [],
      results: []
    }
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  search(){
    algolia.helper.on('result', (content) => {
      console.log('content', content);
      console.log(content.getFacetValues('food_type'))
      this.setState({
        results: content.hits,
      })
    })
    algolia.helper.setQuery(this.state.queryValue).search()
  }

  handleChange(event){
    this.setState({queryValue: event.target.value})
    this.search();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>hi Algolia</h1>
        <form>
          <input value={this.state.queryValue} onChange={this.handleChange}/>
        </form>
        <div style={{display: 'flex'}}>

          <Results rawResults={this.state.results}/>
        </div>

      </div>
    )
  }
}

// USE THE getFacetValues method