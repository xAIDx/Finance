import { useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [transaction, setTransaction] = useState([]);
  const addTransaction = (newTransaction) => {
    setTransaction([...transaction, newTransaction]);
  };

  return (
    <div>
      {<Header />}
      <TransactionForm onAdd={addTransaction} />;
    </div>
  );
}

export default App;
