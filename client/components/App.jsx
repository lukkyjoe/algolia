import React from 'react'
let algolia = require('../search')
import Results from './Results.jsx'
import FoodTypes from './FoodTypes.jsx'
import Ratings from './Ratings.jsx'
import PaymentOptions from './PaymentOptions.jsx'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryValue: "",
      results: [],
      food_types: [], 
      stars_count: [0,1,2,3,4,5],
      UI_selectedPayments: {'AMEX': true, 'Visa': true, 'Discover': true, 'Mastercard': true}
    }
    this.getLocation = this.getLocation.bind(this);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectCuisine = this.handleSelectCuisine.bind(this);
    this.handleSelectPaymentOption = this.handleSelectPaymentOption.bind(this);
  }
  
  componentWillMount(){
    this.getLocation();
    this.search()
  }

  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {console.log(position)});
    }
  }

  search(){
    algolia.helper.on('result', (content) => {
      console.log('content', content);
      this.setState({
        results: content.hits,
        food_types: content.getFacetValues('food_type'),
      })
    })
    algolia.helper.setQuery(this.state.queryValue).search()
  }

  handleChange(event){
    this.setState({queryValue: event.target.value})
    this.search();
  }

  handleSelectCuisine(facetValue){
    algolia.helper.toggleFacetRefinement('food_type', facetValue)
      .search();
  }

  handleSelectRating(rating){
    algolia.helper.clearRefinements('stars_count')
      .addNumericRefinement('stars_count', '>=', rating)
      .search(); 
  }

  handleSelectPaymentOption(type){
    let selected = Object.assign({}, this.state.UI_selectedPayments);
    selected[type] = !selected[type];
    this.setState({UI_selectedPayments: selected})
    // generate an array of the payment methods that are true from 'selected'
    let disjunctiveRefinementArray = []
    for (let key in selected){
      // translate to Diners Club and Carte Blanche
      if (selected[key] && key === 'AMEX'){
        disjunctiveRefinementArray.push('AMEX');
      }
      if (selected[key] && key === 'Visa'){
        disjunctiveRefinementArray.push('Visa');
      }
      if (selected[key] && key === 'Mastercard'){
        disjunctiveRefinementArray.push('MasterCard');
      }
      if (selected[key] && key === 'Discover'){
        disjunctiveRefinementArray.push('Diners Club', 'Carte Blanche');
      }
    }
    algolia.helper.removeDisjunctiveFacetRefinement('payment_options') //clear existing
      .addDisjunctiveFacetRefinement('payment_options', ...disjunctiveRefinementArray)
      .search();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>hi Algolia</h1>
        <form>
          <input value={this.state.queryValue} onChange={this.handleChange}/>
        </form>
        <div style={{display: 'flex'}}>
          <div>
            <FoodTypes food_types={this.state.food_types} select={this.handleSelectCuisine}/>
            <Ratings stars_count={this.state.stars_count} select={this.handleSelectRating}/>
            <PaymentOptions options={this.state.UI_selectedPayments} select={this.handleSelectPaymentOption}/>
          </div>
          <Results rawResults={this.state.results}/>
        </div>
      </div>
    )
  }
}