import Card from "../../Components/Card";
import Header from "../../Components/Header";
import { Container } from "./styles";
import { ProductsContext } from "../../Provider/Products";

import { useContext } from "react";

const Dashboard = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Header />
      <Container>
        {products.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
