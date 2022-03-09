import Button from "../Button";
import { Container } from "./styles";
import { CartContext } from "../../Provider/CartProducts";

import { useContext } from "react";

const Card = ({ cart, product }) => {
  const { addToCart, delFromCart } = useContext(CartContext);

  return (
    <Container>
      <img src={product.image} alt="produto" />
      <p>{product.title}</p>
      <span>{`R$ ${product.price}`}</span>
      {cart ? (
        <Button onClick={() => delFromCart(product)}>Remover</Button>
      ) : (
        <Button onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </Button>
      )}
    </Container>
  );
};

export default Card;
