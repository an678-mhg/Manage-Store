import { useLocation } from "react-router-dom";

const useSearchParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams;
};

export default useSearchParams;
