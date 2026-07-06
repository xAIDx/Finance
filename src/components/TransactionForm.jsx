import { useState } from "react";
import { Plus } from "lucide-react";

function TransactionForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expence");
  const [category, setCategory] = useState("food");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      type,
      category,
      description,
      date,
    };

    onAdd(newTransaction);

    setAmount("");
    setDescription("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-6 rounded-xl shadow"
    >
      <h2 className="text-xl font-bold">Новая транзакция</h2>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Сумма"
        className="border rounded-xl px-4 py-2 w-full"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      >
        <option value="income">Доход</option>
        <option value="expense">Расход</option>
      </select>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      >
        <option value="food">Еда</option>
        <option value="rent">Аренда</option>
        <option value="games">Игры</option>
        <option value="internet">Интернет</option>
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
        className="border rounded-xl px-4 py-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded-xl px-4 py-2 w-full"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TransactionForm;
