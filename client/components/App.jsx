import React from 'react';
// let search = require('../search');


let algoliasearch = require('algoliasearch');
let algoliasearchHelper = require('algoliasearch-helper');

let client = algoliasearch('OXB537J4TM', 'fdfc76955aeeeccf7a721bffc0878b43') //TODO: consider hiding?
let helper = algoliasearchHelper(client, 'Restaurants')

let log = () => {console.log('hiii')}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.foo = this.foo.bind(this);
  }
  
  foo(){
    console.log('siup')
    helper.on('result', (content) => {console.log(content)})
    helper.search()
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>hi Algolia</h1>
        <input onChange={this.foo}/>
      </div>
    )
  }
}