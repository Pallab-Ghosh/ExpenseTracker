import React from 'react'


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


  return (
    <div>ExpenseTracker</div>
  )
}
