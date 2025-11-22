import { useState,useMemo } from "react";
export default function useFiltered(data, initialSearch = ""){
     const [searchQuery, setSearchQuery] = useState(initialSearch);

  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]); // only recompute if data or searchQuery changes

  return { searchQuery, setSearchQuery, filteredData };
}