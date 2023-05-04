import React from 'react'


const transactionData=[]
export const ExpenseTracker = () => {
  const [income,setincome]=useState(0)
  const[expense,setexpense]=useState(0)
  const[transactions,settransactions]=useState(transactionData)
  return (
    <div>ExpenseTracker</div>
  )
}
