import { useMemo } from "react";
export function FilteredList({ list }) {
  const filterItems = useMemo(() => {
    const ogjFilter = list.filter((obj) => obj.age >= 18);
    return ogjFilter;
  }, [list]);

  return (
    <div>
      <ul>
        {filterItems.map((item) => (
          <li key={item.id}>
            {item.name},{item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
