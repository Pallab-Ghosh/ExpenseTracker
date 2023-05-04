import React from 'react'

export const TransactionHistory = ({transactions,onDeletetransaction}) => {
  return (
    <>
    <h2 className='trh'>TransactionHistory</h2>
    <ul className='transactions'>
    {
transactions.map((item)=><li key={item.id}>{item.name}   {item.amount}/-  {item.datetime} {item.showTime} <button className='close' onClick={()=>(onDeletetransaction(item.id))}>X</button></li>)
    }
     
    </ul>
    </>
  )
}
