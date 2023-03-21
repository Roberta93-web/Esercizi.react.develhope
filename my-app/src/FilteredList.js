import { useMemo } from "react";
export function FilteredList({ list }) {
  const filterItems = useMemo(() => {
    const newObj = list.filter((obj) => obj.age >= 18);
    return newObj;
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
