import { useEffect, useRef } from "react";

export function CardDetails({ initialData }) {
  const formRef = useRef();

  useEffect(() => {
    formRef.current.elements.model.value = initialData.model;
    formRef.current.elements.year.value = initialData.year;
    formRef.current.elements.color.value = initialData.color;
  }, [initialData]);

  return (
    <div>
      <h1>Car:</h1>
      <form ref={formRef}>
        <input type="text" name="model" />
        <input type="text" name="year" />
        <input type="text" name="color" />
      </form>
    </div>
  );
}
