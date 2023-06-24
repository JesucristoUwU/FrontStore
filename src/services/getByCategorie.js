import {useState, useEffect} from "react"
import "whatwg-fetch"

export const getByCategorie = (category = "electronica") => {

   const [categorie, setCategorie] = useState([])
   const [isLoading ,setIsLoading] = useState(true)

   const handleResponseCategorie = async () => {
      const res = await fetch(`http://localhost:8000/api/products/${categorie}`);
      const categories = await res.json()

      setCategorie(categories)
      setIsLoading(false)
   }

   useEffect( ()=> {
      handleResponseCategorie()
   },[])

   return {
      categorie,
      isLoading     
   }
}