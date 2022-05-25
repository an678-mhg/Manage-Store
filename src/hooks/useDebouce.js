import { useEffect, useState } from "react";

const useDebouce = (value, delay) => {
  const [valueDebouce, setValueDebouce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setValueDebouce(value), delay);

    return () => clearTimeout(handler);
  }, [value]);

  return valueDebouce;
};

export default useDebouce;
