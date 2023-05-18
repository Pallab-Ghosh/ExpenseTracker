import React from 'react'
import { useState } from 'react'
import { TransactionHistory } from './TransactionHistory'
import Expense from './Expense'
import { TransactionForm } from './TransactionForm'

const transactionData=[]
export const ExpenseTracker = () => {
  const [income,setincome]=useState(0)
  const[expense,setexpense]=useState(0)
  const[transactions,settransactions]=useState(transactionData)
  const saveState=()=>{
    localStorage.setItem('data',JSON.stringify(transactions))
 }

 const calculateexpenses=()=>{
  let expense=0,income=0;
  transactions.forEach((data)=>{
   if(data.type==='income')
   {
     income+=data.amount;
   }
   else if(data.type==='expense')
   {
     expense+=data.amount
   }
  })
  saveState()
 setincome(income)
 setexpense(expense)
}
//handle_new_transaction
const handlenewtransaction=(item)=>{
  
  let clone=[...transactions,item]
   
  settransactions(clone)
}

//handle_delete_transaction
const handledeletetransaction=(id)=>{
  console.log("id--> ",id)
   const newtrans=transactions.filter((item)=>{
     return item.id!=id
   });
   settransactions(newtrans)
}
 

  return (
    <div>
    <h1 className='et'>ExpenseTracker</h1>
      <Expense income={income} expense={expense}/>
      <TransactionHistory transactions={transactions} onDeletetransaction={handledeletetransaction} />
      <TransactionForm handlenewtransaction={handlenewtransaction}/>
    </div>
  )
}
