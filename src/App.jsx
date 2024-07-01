import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Link to={"/products"}>all products</Link>
      <br />
      <br />
      <Link to={"/create"}>new product</Link>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}
