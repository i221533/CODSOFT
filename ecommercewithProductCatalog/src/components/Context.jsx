import React, { createContext, useContext, useState } from "react";

const UserNameContext = createContext();

export const useUserName = () => useContext(UserNameContext);

export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [informationMessage, setInformationMessage] = useState('');
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [userEmail, setEmail] = useState('');
  const [GrandTotalOfUser, setGrandTotalOfUser] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  return (
    <UserNameContext.Provider value={{ 
      userName, 
      setUserName, 
      informationMessage, 
      setInformationMessage,
      numberOfItems,    
      setNumberOfItems,
      userEmail,
      setEmail,
      GrandTotalOfUser,
      setGrandTotalOfUser,
      totalQuantity,
      setTotalQuantity

    }}>
      {children}
    </UserNameContext.Provider>
  );
};
