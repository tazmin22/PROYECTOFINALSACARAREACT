import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount/ItemCount';
import { ListGroup } from 'react-bootstrap';

const ItemDetail = ({productData}) => {
  
  return (
    <div className='d-flex justify-content-center align-items-center'> 
      <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.image} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{productData.price}</ListGroup.Item>
        <ListGroup.Item>{productData.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ItemCount />
        {productData.stock >= 5 ? (
          <strong>Stock disponible</strong>
        ) : (
          <strong>Ultimas unidades disponibles!</strong>
        )}
      </Card.Body>
    </Card>
    </div>
  );
};

export default ItemDetail;