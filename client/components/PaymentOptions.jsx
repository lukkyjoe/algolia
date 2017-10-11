import React from 'react';

const PaymentOptions = (props) => {
  const options = Object.entries(props.options);
  let list = options.map((item, index) => {
      return (
        <div key={index} style={{display: 'flex'}}>
          <div> {item[0]}</div>
          <input type="checkbox" checked={item[1]} onChange={() => {
            props.select(item[0])
            }}/>
        </div>
      )
    })
  return <div><h3>Payment Options</h3>{list}</div>
}

export default PaymentOptions;