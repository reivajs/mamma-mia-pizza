import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import GlobalContext from "../GlobalContext";

export default function Navigation() {
  const { galeria } = useContext(GlobalContext);
  const totalPrice = () => {
    const coolReducer = (coolAccumulator, coolCurrentValue) => coolAccumulator + coolCurrentValue.price;
    const coolSum = galeria.filter((pizza) => pizza.state === true).reduce(coolReducer, 0);
    return coolSum
  }

  return (
    <>
      <Navbar bg="primary" variant="primary">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-start">
            <Link to="/" className="text-white ms-3 text-decoration-none">
            🍕 Pizzeria Mamma Mia!
            </Link>
          </Navbar.Collapse>
          <Navbar.Brand>
            <Link to="/carrito" className="text-white text-decoration-none">
            🛒<span>{totalPrice()}</span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
