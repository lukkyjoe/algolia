import React from 'react'
import Results from './Results.jsx'
import FoodTypes from './FoodTypes.jsx'
import Ratings from './Ratings.jsx'
import PaymentOptions from './PaymentOptions.jsx'
import styles from './App.css'
let algolia = require('../search')

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      queryValue: "",
      hits: [],
      food_types: [], 
      stars_count: [0,1,2,3,4,5],
      UI_selectedPayments: {'AMEX': true, 'Visa': true, 'Discover': true, 'Mastercard': true},
      nbHits: 0,
      processingTimeMS: 0,
      highlightFood: false,
    }
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectCuisine = this.handleSelectCuisine.bind(this);
    this.handleSelectPaymentOption = this.handleSelectPaymentOption.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }
  
  componentWillMount(){
    this.search()
  }

  search(){
    algolia.helper.on('result', (content) => {
      // console.log('content', content);
      this.setState({
        content: content,
        hits: content.hits,
        food_types: content.getFacetValues('food_type'),
      })
    })
    algolia.helper.setQueryParameter('aroundLatLngViaIP', true).setQuery(this.state.queryValue).search(); //use fallback first because it's faster. 
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let positionString = `${lat}, ${lng}`;
        algolia.helper.setQueryParameter('aroundLatLng', positionString).setQuery(this.state.queryValue).search()
    });
  }

  handleChange(event){
    this.setState({queryValue: event.target.value})
    this.search();
  }

  handleSubmit(event){
    event.preventDefault()
  }

  handleSelectCuisine(facetValue){
    algolia.helper.toggleFacetRefinement('food_type', facetValue)
      .search();
    let isFoodTypeSelected = () => {
      if (algolia.helper.getRefinements('food_type').length){
        return true;
      } else {
        return false;
      }
    }
    this.setState({highlightFood: isFoodTypeSelected()});
    // console.log('foodtype refinements:', algolia.helper.getRefinements('food_type'));
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

  handleNextPage(){
    let currentPage = algolia.helper.getCurrentPage();
    algolia.helper.setQueryParameter('page', currentPage + 1).search()
  }

  render() {
    return (
      <div style={{fontFamily: 'Helvetica'}}>
        <div style={{display: 'flex', padding: '20px', backgroundColor: '#1C688E', justifyContent: 'space-around'}}>
          <form onSubmit={this.handleSubmit} style={{width: '100%'}}>
            <input style={{height: '35px', width: '100%'}} value={this.state.queryValue} onChange={this.handleChange} placeholder={'Search for Restaurants by Name, Cuisine, Location'}/>
          </form>
        </div>
        <div className={styles.layout} style={{display: 'flex'}}>
          <div className={styles.sidebar}>
            <FoodTypes food_types={this.state.food_types} select={this.handleSelectCuisine} hover={this.handleHover} highlight={this.state.highlightFood}/>
            <Ratings stars_count={this.state.stars_count} select={this.handleSelectRating}/>
            <PaymentOptions options={this.state.UI_selectedPayments} select={this.handleSelectPaymentOption}/>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.resultsSection}>
            <div className={styles.resultsSummary}>
              <div className={styles.resultsFound}>{`${this.state.content.nbHits} results found `}</div>
              <div>{`in ${this.state.content.processingTimeMS / 1000} seconds`}</div>
              <div style={{width: '70%', marginLeft: '10px', display: 'flex', alignItems: 'flex-end'}}><div className={styles.topHorizontalLine}></div></div>
            </div>
            <Results rawResults={this.state.hits}/>
            <div className={styles.showMore}><button style={{width: '184px', height: '37px'}} onClick={this.handleNextPage}>Show more</button></div>          
          </div>
        </div>
        <div className={styles.horizontalLine}></div>
      </div>
    )
  }
}