import React from 'react'

function Balance({transactionList}) {
  let income = 0;
  let expense = 0;
  for (let transaction of transactionList) {
     console.log(typeof(transaction));
    if (+transaction.amount > 0) {
      income = +transaction.amount + income;
      console.log(typeof(+transaction));
    } else {
      expense = +transaction.amount + expense;
    }
  }
  return (
    <>
       <div className="">
            <p className="text-md">YOUR BALANCE</p>
            <div className="flex flex-row">
              <span className="text-2xl font-bold">$</span>
              <div className="text-2xl font-bold">{income+expense}</div>
            </div>
          </div>
          <div className="w-full drop-shadow-lg bg-white p-4 flex flex-row my-4">
            <div className="w-1/2 flex flex-col items-center text-green-700 border-r-2">
              <p className="text-lg">INCOME</p>
              <div className="flex flex-row">
                <span className="text-2xl font-bold">$</span>
                <div className="text-2xl font-bold">{income}</div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center text-red-700">
              <p className="text-lg">EXPENSE</p>
              <div className="flex flex-row">
                <span className="text-2xl font-bold">$</span>
                <div className="text-2xl font-bold">{expense}</div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Balance