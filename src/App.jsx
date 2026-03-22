import React from "react";
import { useStore } from "./Store/CartStore";


const SearchBar = () => {
  // ⚡ Destructuring: Ek hi line mein sab nikaal liya
  const { search, setSearch, products } = useStore();

  // Simple filter logic
  const filtered = products.filter((p) => 
    p.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h3>Search Products</h3>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "250px", borderRadius: "5px" }}
      />

      {/* Real-time Result */}
      <div style={{ marginTop: "15px" }}>
        {filtered.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;