import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  //   const currentSorted = searchParams.get("sortBy") || options.at(0).value;
  const currentSorted = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);

    //   onChange={(e)=>setSearchParams(e.target.value)}
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={currentSorted}
    />
  );
}

export default SortBy;
