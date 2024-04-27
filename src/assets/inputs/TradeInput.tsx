import React from 'react'
import './TradeInput.css'

interface Props {
    placeholderText: string;
}

const TradeInput = ({ placeholderText }: Props) => {
  return (
    <div className="custom_input">
    <input className="input" type="number" min={0} placeholder={placeholderText}/>
    </div>  
  )
}

export default TradeInput