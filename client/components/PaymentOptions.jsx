import React from 'react';

const PaymentOptions = (props) => {
  const options = props.options;
  let list = options.map((item, index) => <div key={index} onClick={() => {props.select(item)
    console.log('selected', item)
    }}> {item}</div>)
  return <div>{list}</div>
}

export default PaymentOptions;