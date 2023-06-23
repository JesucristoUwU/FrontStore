import { useEffect, useState } from "react"

export const getAllProducts = () => {

   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState([]);

   const handleUsers = async () => {
      const response = await fetch('http://192.168.1.22:8000/api/products');
      const ResProducts = await response.json();

      const Array = ResProducts.map( producto => producto)
      setData(Array);
      setIsLoading(false);
   }

   useEffect(() => {
      handleUsers();
   },[])

   return {
      isLoading,
      data
   }  
}
