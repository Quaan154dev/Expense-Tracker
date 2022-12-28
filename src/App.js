import {useState ,useEffect} from 'react'
import History from './Component/History'
import AddTransaction from './Component/AddTransaction'
// import "./indexs.css"
import Balance from './Component/History'


function App() {
  // const [transactionList, setTransactionList] = useState([]);
  const [transactionList, setTransactionList] = useState(JSON.parse(localStorage.getItem('expense-tracker'))??[]);
  useEffect(() => {
    localStorage.setItem('expense-tracker', JSON.stringify(transactionList))
  }, [transactionList])
  console.log(transactionList);
  return (
    <>
      <div className="w-screen ">
        <div className="w-[32rem] mx-auto">
          <h1 className="text-center font-bold text-3xl my-4">
            Expense Tracker
          </h1>
          <Balance transactionList = {transactionList} ></Balance>
          <History transactionList = {transactionList}></History>
          <AddTransaction 
            setTransactionList={(newTran) => setTransactionList([...transactionList,newTran])}
          >
          </AddTransaction> 
        </div>
      </div>
    </>
  );
}

export default App;
