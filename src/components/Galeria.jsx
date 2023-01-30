import "../assets/css/galeria.css"

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import GlobalContext from "../GlobalContext";

export default function Galeria() {
  const { galeria, setGaleria } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: `url("https://www.sitiosargentina.com.ar/imagenes-2010/pizza-2.jpg")` }}>
        <h1 style={{ color: "white" }}>¡Pizzería Mamma Mia!</h1>
        <h6 style={{ color: "white" }}>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
      <hr />
      <div className="galeria foto grid-columns-3 p-3 my-5 mb-5">
        {galeria.map((pizza) => {
          return (
            <Card className="galeria foto mt-5" key={pizza.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizza.img} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <hr />
                <Card.Text>
                  <strong>Ingredientes:</strong>
                  <ul >
                    <li>🍕 {pizza.ingredients[0]}</li>
                    <li>🍕 {pizza.ingredients[1]}</li>
                    <li>🍕 {pizza.ingredients[2]}</li>
                    <li>🍕 {pizza.ingredients[3]}</li>
                  </ul>
                </Card.Text>
                <h1>${pizza.price}</h1>
                <Button variant="primary" onClick=
                  {() => {
                    navigate(`/pizza/${pizza.id}`)
                  }}
                >Ver Detalle 👀</Button>
                <Button variant="danger"
                  onClick={() => {
                    const index = galeria.findIndex((ele) => ele.id === pizza.id)
                    galeria[index].state = true
                    setGaleria([...galeria])
                  }}
                >Añadir 🛒</Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
