import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoad] = useState(true);
  const [searchItem, setSearchItem] = useState("a");
  const [phoneList, setPhoneList] = useState([])
  
  const fetchPhones = async () => {
    setLoad(true)
    try {
      const response = await fetch(`${url} ${searchItem}`)
      const data = await response.json()
      const { drinks } = data;
      console.log(data);
      if (drinks) {
        const newPhone = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
          
          return {
            id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic,
          glass:strGlass}
        })
        setPhoneList(newPhone)
      }
      else {
        setPhoneList([])
      }
      setLoad(false)
    } catch (error) {
      console.log(error);
      setLoad(false)
    }
  }
  useEffect(() => {
   fetchPhones()
  }, [searchItem])


  return <AppContext.Provider value={{
    loading,
    searchItem,
    setSearchItem,
    phoneList
  }}>
    {children}
  </AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };