import React from 'react';

let log = () => {console.log('hiii')}

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>hi Algolia</h1>
        <input onChange={log}/>
      </div>
    )
  }
}