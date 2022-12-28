import React from 'react'
import {useState} from 'react'


function AddTransaction({setTransactionList}) {
  const [newTranSaction, setnewTranSaction] = useState({
    text:"",
    amount:"",
  });
  const handleOnClick = () => {
    setTransactionList(newTranSaction)
  }

  return (
    <>
       <div className="flex flex-col">
            <h3 className="text-xl font-bold border-b-2 pb-2 mb-4">
              Add new transaction
            </h3>
            <div className="flex flex-col mb-2">
              <p className="text-lg font-bold mb-2">Text</p>
              <input placeholder="Enter text..." className="p-2 border-2 border-slate-200 outline-none"
              onChange={(e) => setnewTranSaction({
                ...newTranSaction,
                text:e.target.value,
              })}
              ></input>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold mb-2">Amount (negative - expense, postive - income)</p>
              <input placeholder="Enter text..." className="p-2 border-2 border-slate-200 outline-none"
               onChange={(e) => setnewTranSaction({
                ...newTranSaction,
                amount:e.target.value,
              })}  
              ></input>
            </div>
          </div>
          <button className="bg-black text-white text-center w-full py-2 mt-4"
            // onClick={()=> setTransactionList(newTranSaction)} 
            onClick = {() => handleOnClick ()} 
          >Add transaction</button>
    </>
  )
}

export default AddTransaction