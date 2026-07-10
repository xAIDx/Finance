import { useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import FilterBar from "./components/FilterBar";

function App() {
  const [transactions, setTransactions] = useState([]);
  const addTransactions = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = transactions.filter(
    (t) => activeCategory === "all" || t.category === activeCategory,
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {<Header />}
      <div className="max-w-5xl mx-auto p-6 flex flex-col gap-6">
        <Dashboard transactions={transactions} />
        <FilterBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="flex gap-6 items-start">
          <TransactionForm onAdd={addTransactions} />
          <TransactionList
            transactions={filtered}
            onDelete={deleteTransaction}
          />
          <ExpenseChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
