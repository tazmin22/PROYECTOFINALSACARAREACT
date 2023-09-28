import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const useItemCollection = (collectionName, productId) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    
    const db = getFirestore();
  
      
    const item = doc(db, collectionName, productId);

    
    getDoc(item).then((snapshot) => {
      setData({ id: snapshot.id, ...snapshot.data() });
    }).catch((error)=>{
        console.log ("hubo un error kpo")
    }).finally(() => {
        setLoading(false)
    })
  }, [productId]);

  return { data, loading };
};