import { useContext } from "react";
import { useParams } from "react-router-dom"
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import GlobalContext from "../GlobalContext";

export default function Pizza() {
  const { galeria, setGaleria } = useContext(GlobalContext);

  const { id } = useParams();

  return (
    <>{galeria.filter((pizza) => pizza.id === id).map((pizza) => {
      return (
        <div className="d-flex" key={pizza.id}>
          <img style={{ width: '18rem' }} alt={pizza.desc} src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <hr />
            <Card.Text>
              {pizza.desc}
            </Card.Text>
            <strong>Ingredientes:</strong>
            <div>🍕{pizza.ingredients[0]}</div>
            <div>🍕{pizza.ingredients[1]}</div>
            <div>🍕{pizza.ingredients[2]}</div>
            <div>🍕{pizza.ingredients[3]}</div>
            <div className="d-flex justify-content-around" >
              <h1>Precio: ${pizza.price}</h1>
              <Button variant="danger"
                onClick={() => {
                  const index = galeria.findIndex((ele) => ele.id === pizza.id)
                  galeria[index].state = true
                  setGaleria([...galeria])
                }}>Añadir 🛒</Button>
            </div>

          </Card.Body>
        </div>
      )
    })}

    </>
  )
}
