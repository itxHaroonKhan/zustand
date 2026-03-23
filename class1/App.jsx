import React, { useEffect } from "react";
import { useStore } from "./Store/CartStore";


const SearchPage = () => {
  const { search, setSearch, products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Simple filtering logic
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3>Search Products</h3>

      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filtered.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;