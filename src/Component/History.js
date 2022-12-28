import React from 'react'

function History({transactionList}) {

  return (
    <>
        <div className="flex flex-col">
            <h3 className="text-xl font-bold border-b-2 pb-2 mb-4">History</h3>
            <div className="flex flex-col  h-[164px] overflow-scroll ">
              {
                transactionList.map((transaction,index) => (
                  <div
                    key={index}
                    className={
                      +transaction.amount > 0
                      ?"flex flex-row justify-between w-full drop-shadow-lg bg-white p-2 mb-4 border-r-8 border-r-green-700"
                      :"flex flex-row justify-between w-full drop-shadow-lg bg-white p-2 mb-4 border-r-8 border-r-red-700"
                    }   
                  >
                    <p className="text-lg">{transaction.text}</p>
                    <div className="text-lg">{transaction.amount}</div>
                  </div>
                ))
              }
            </div>
        </div>
    </>
  )
}

export default History;