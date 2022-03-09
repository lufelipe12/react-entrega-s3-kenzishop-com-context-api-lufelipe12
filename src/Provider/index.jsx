import { ProductsProvider } from "./Products";
import { CartProvider } from "./CartProducts";

const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};

export default Provider;
