import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { useItemCollection } from "../hooks/useItemCollection";
import LoaderComponent from "../LoaderComponent/LoaderComponent";



const ItemDetails = () => {
    
    const { productId } = useParams();
    const {data, loading} = useItemCollection("products", productId)
  
   
  
    return loading ? <LoaderComponent /> : <ItemDetail productData={data} />;
  };
  
  export default ItemDetails;