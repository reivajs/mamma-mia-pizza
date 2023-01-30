import { useState, useContext } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import GlobalContext from "../GlobalContext";

export default function Carrito() {
  const { galeria, setGaleria } = useContext(GlobalContext);
  const [count, setCount] = useState(1);
  // const addToCart = ({ id, price, name, ixmg }) => {
  //   const index = shoppingCart.findIndex((ele) => ele.id === id )
  //   const product = { id, price, name, img, count: 1}
  //   if (index >= 0) {
  //     shoppingCart[index].count++;
  //     setShoppingCart([...shoppingCart])
  //   } else {
  //     setShoppingCart([...shoppingCart, product])
  //   }
  // }
const increase = () => {
  setCount(count + 1)
}

const decrease = () => {
  if (count < 1) {
    const index = galeria.findIndex((ele) => ele.id === pizza.id)
    galeria[index].state = false
    setGaleria([...galeria])
  }
  setCount(count - 1)
}
  const totalPrice = () => {
    const coolReducer = (coolAccumulator, coolCurrentValue) => coolAccumulator + coolCurrentValue.price;
    const coolSum = galeria.filter((pizza) => pizza.state === true).reduce(coolReducer, 0);
    return coolSum
  }

  return (
    <>
      <div className="galeria foto grid-columns- 4">
        <Row>
          <Col>
            <h6>Detalles del Pedido:</h6>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
      <div>{galeria.filter((pizza) => pizza.state === true).map((pizza) => {
        return (
          <Container key={pizza.id}>
            <Row>
              <Col>
                <div className="d-flex ">
                  <div className="mx-3">
                    <img src={pizza.img} alt={pizza.desc} style={{ width: '3rem' }} />
                  </div>
                  <strong>{pizza.name}</strong>
                </div>
              </Col>
              <Col>
                <p>${pizza.price}</p>
              </Col>
              <Col>
                <Button variant="danger" onClick={increase}>+</Button>
                 {count}
                <Button onClick={decrease}>-</Button>
              </Col>
            </Row>
            <hr />
          </Container>
        )

      })}</div>
      <Row>
        <Col>
          <h1>Total: $ <span>{totalPrice()}</span></h1>
          <Button variant="success">Ir a Pagar</Button>
        </Col>
        <Col>
        </Col>
      </Row>

    </>
  )
}