import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                 const itemFromStorage = window.localStorage.getItem(itemName);
             
                 let parsedItem;
     
                 if (!itemFromStorage) {
                 localStorage.setItem(itemName, JSON.stringify(initialValue));
                 parsedItem = initialValue;
                 } else {
                 parsedItem = JSON.parse(itemFromStorage);
                 setItem(parsedItem)
                 }
     
                 setLoading(false);
             } catch (error){
                 setLoading(false);
                 setError(true);
             }
        }, 400)
    }, [])  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return { item, saveItem, loading, error };
    
}

  export { useLocalStorage };