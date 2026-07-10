function Dashboard({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-blue-500 h-fit">
        <p className="text-slate-400 text-sm">Баланс</p>
        <p className="text-2xl font-bold text-white">{balance}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-green-500 h-fit">
        <p className="text-slate-400 text-sm">Доходы</p>
        <p className="text-2xl font-bold text-green-400">{income}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-red-500 h-fit">
        <p className="text-slate-400 text-sm">Расходы</p>
        <p className="text-2xl font-bold text-red-400">{expense}</p>
      </div>
    </div>
  );
}

export default Dashboard;
