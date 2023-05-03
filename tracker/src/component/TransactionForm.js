import React from 'react'
import { uniqueId } from './utils'
export const TransactionForm = () => {
  const [name,setname]=useState('')
  const [amt,setamt]=useState('')

  const handle=(type,event)=>{
    event.preventDefault()
    if(!name && !amt)
    {
      alert('Please enter Information')
    }
    
    if(name && amt)
    {
      const current=new Date();
      const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
      const data={id:uniqueId(),name:name,amount:parseInt(amt),type:type,className:type=='income'?'income+':'expense-',datetime:date,}
      handlenewtransaction(data)
      setamt('')
      setname('')
    }
  
  }

  return (
    <div className='form1'>
    <h2>Add new Transaction</h2>
    <form className='transaction-form'>
     <label>
        Name
        <div>
           <input type='text' value ={name}  placeholder='Enter-amount_name' onChange={(e)=>setname(e.target.value)}/>
        </div>
      </label>

      <label>
        Amount
        <div>
            <input type='number' value={amt} placeholder='Enter-amount'  onChange={(e)=>setamt(e.target.value)}/>
        </div>
      </label>
    <div>
        <button  className= "income-btn"  onClick={(e)=>handle('income',e)}>Add Income</button>
        <button  className="expense-btn" onClick={(e)=>handle('expense',e)}>Add Expense</button>
     
    </div>
 </form>
    
    </div>
  )
}
