// import { PRODUCTS } from "../../products";
// import { Product } from "./product";

// import "./shop.css";
// import "../../App.css";

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="container">
//         <div className="searchbar">
//           <input
//             type="text"
//             name="search"
//             className="search"
//             placeholder="Search products..."
//           />
//         </div>

//         <div className="products">
//           {" "}
//           {PRODUCTS.map((product, index) => (
//             <Product data={product} key={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState } from "react"; // Import useState for managing state
import { PRODUCTS } from "../../products";
import { Product } from "./product";

import "./shop.css";
import "../../App.css";

export const Shop = () => {
  // State to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input changes in the search bar
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term as the user types
  };

  // Filter products based on the search term
  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop">
      <div className="container">
        <div className="searchbar">
          <input
            type="text"
            name="search"
            className="search"
            placeholder="Search products..."
            value={searchTerm} // Bind the input value to the searchTerm state
            onChange={handleSearchChange} // Update the state on input change
          />
        </div>

        <div className="products">
          {/* Use the filteredProducts array instead of PRODUCTS */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Product data={product} key={index} />
            ))
          ) : (
            <p>No products match your search.</p> // Display message if no products are found
          )}
        </div>
      </div>
    </div>
  );
};
