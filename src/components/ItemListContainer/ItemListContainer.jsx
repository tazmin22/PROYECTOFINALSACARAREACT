import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



const ItemListContainer = ({ productsData }) => {
  //useNavigate nos permite navegar entre rutas dentro de nuestra aplicación
  const navigate = useNavigate();
  return (
    <div className="hola">
      {productsData.map((product) => {
        return (
          
          <Card  className="hola" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button className="boton"
                variant="primary"
                onClick={() => navigate(`/item/${product.id}`)}
              >
                Detalles
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;