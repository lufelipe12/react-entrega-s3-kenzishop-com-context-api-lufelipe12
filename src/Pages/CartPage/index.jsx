import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import { Container } from "./styles";
import { CartContext } from "../../Provider/CartProducts";

import { useContext } from "react";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const price = cart.reduce((acc, product) => acc + product.price, 0);
  const quantity = cart.length;

  return (
    <>
      <Header />
      <Container>
        {cart.map((product) => (
          <>
            <Card cart product={product} />
          </>
        ))}
        <aside>
          <h3>Resumo do pedido</h3>
          {quantity > 1 || quantity === 0 ? (
            <p>{`${quantity} produtos`}</p>
          ) : (
            <p>{`${quantity} produto`}</p>
          )}
          <span>{`R$ ${price.toFixed(2)}`}</span>
          <Button finish>Finalizar pedido</Button>
        </aside>
      </Container>
    </>
  );
};

export default CartPage;
