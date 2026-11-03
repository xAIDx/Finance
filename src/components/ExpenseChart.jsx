import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = {
  food: "#6366f1",
  rent: "#8b5cf6",
  games: "#a78bfa",
  internet: "#c4b5fd",
};

function ExpenseChart({ transactions }) {
  const data = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      const existing = acc.find((item) => item.name === t.category);
      if (existing) {
        existing.value += t.amount;
      } else {
        acc.push({ name: t.category, value: t.amount });
      }
      return acc;
    }, []);

  if (data.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Расходы по категориям
        </h2>
        <p className="text-slate-400">Нет данных для графига</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl py-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Расходы по категориям
      </h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx={200}
          cy={150}
          innerRadius={70}
          otherRadius={120}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[entry.name] || "#6366f1"} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;
