import { useEffect, useState } from "react"
import "whatwg-fetch"

export const getAllProducts = () => {

   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState([]);

   const handleUsers = async () => {
      const response = await fetch('http://192.168.1.22:8000/api/products');
      const ResProducts = await response.json();

      setData(ResProducts);
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
