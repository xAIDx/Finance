function FilterBar({ activeCategory, setActiveCategory }) {
  const categories = [
    { label: "Все", value: "all" },
    { label: "Еда", value: "food" },
    { label: "Аренда", value: "rent" },
    { label: "Игры", value: "game" },
    { label: "Интернет", value: "intenet" },
  ];

  return (
    <div className="flex gap-3 px-8 py-4">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setActiveCategory(cat.value)}
          className={
            activeCategory === cat.value
              ? "px-4 py-2 rounded-xl bg-indigo-600 text-white cursor-pointer"
              : "px-4 py-2 rounded-xl bg-slate-700 text-slate-300 cursor-pointer hover:bg-slate-600"
          }
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
