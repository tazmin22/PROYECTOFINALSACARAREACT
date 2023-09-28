import React from 'react'
import { Button } from 'react-bootstrap';
const formComponent = () => {
  return (
    <div><span>Crear Producto</span>
    <form >
        <input type="text" placeholder='Titulo' />
        <input type="text" placeholder='Descripcion' />
        <input type="text" placeholder='Precio' />
        <input type="text" placeholder='Url Imagen' />
        <input type="text" placeholder='Stock' />
        <input type="text" placeholder='Categoria' />



    </form>
    <Button> Crear Producto</Button>
    
    
    </div>
  );
};

export default formComponent