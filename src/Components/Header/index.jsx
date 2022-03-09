import { StyledHeader } from "./styles";
import { CartContext } from "../../Provider/CartProducts";

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";

const Header = () => {
  const history = useHistory();
  const { cart } = useContext(CartContext);

  const quantity = cart.length;

  return (
    <StyledHeader>
      <h2 onClick={() => history.push("/")}>Kenzie Shop</h2>
      <div>
        <FiShoppingCart onClick={() => history.push("/cart")} />
        {quantity > 0 && (
          <section>
            <span>{`${quantity}`}</span>
          </section>
        )}
        <p>Carrinho</p>
        <FiLogIn />
        <p>Entrar</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
