import React from 'react'

export const TransactionForm = () => {
  const [name,setname]=useState('')
  const [amt,setamt]=useState('')

  const handle=(type,event)=>{
   
  
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
