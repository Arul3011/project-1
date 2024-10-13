import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [userID, setUserID] = useState("");
  const [userName, setuserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        setUserID,
        userID,
        userName,
        setuserName,
        setUserEmail,
        userEmail,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
