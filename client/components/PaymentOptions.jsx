import React from 'react';

const PaymentOptions = (props) => {
  const options = props.options;
  let list = options.map((item, index) => {
      return (
        <div key={index} onClick={() => {props.select(item)
            console.log('selected', item)
            }}>
          <div> {item}</div>
          <input type="checkbox"/>
        </div>
      )
    })
  return <div>{list}</div>
}

export default PaymentOptions;