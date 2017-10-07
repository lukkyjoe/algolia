import React from 'react';
let algolia = require('../search');

let log = () => {console.log('hiii')}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.foo = this.foo.bind(this);
  }
  
  foo(){
    console.log('siup')
    algolia.helper.on('result', (content) => {console.log(content)})
    algolia.helper.search()
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