function TransactionList({ transactions, onDelete }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">История транзакций</h2>

      {transactions.length === 0 && (
        <p className="text-slate-400">Транзакций пока нет</p>
      )}
      {transactions.map((t) => (
        <div
          key={t.id}
          className="flex justify-between items-center py-3 border-b border-slate-700"
        >
          <div>
            <p className="text-white font-medium">{t.description}</p>
            <p className="text-slate-400 text-sm">
              {t.category} • {t.date}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span
              className={
                t.type === "income"
                  ? "text-green-400 font-bold"
                  : "text-red-400 font-bold"
              }
            >
              {t.type === "income" ? "+" : "-"}
              {t.amount} ₸
            </span>

            <button
              onClick={() => onDelete(t.id)}
              className="cursor-pointer text-slate-500 hover:text-red-400"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
