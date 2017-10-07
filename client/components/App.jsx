import React from 'react';
let algolia = require('../search');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
  }
  
  search(){
    algolia.helper.on('result', (content) => {console.log(content)})
    algolia.helper.search()
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>hi Algolia</h1>
        <input onChange={this.search}/>
      </div>
    )
  }
}