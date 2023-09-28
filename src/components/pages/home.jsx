import ItemListContainer from "../ItemListContainer/ItemListContainer";

import LoaderComponent from "../LoaderComponent/LoaderComponent";

import { useCollection } from "../hooks/useCollection";
import ItemDetail from "../ItemDetail";

const Home = () => {

  const {data, loading} = useCollection("products");

 return loading ? <LoaderComponent /> : <ItemListContainer productsData={data} />;
};

export default Home;