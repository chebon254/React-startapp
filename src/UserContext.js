import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);
export const UserProvider = ({ children }) => {
    const [user] = useState({
        name: "Johen",
        email: "johen@gmail.com",
        dateOfBirth: "01/01/2021"
    });
    return <UserContext.Provider value={{user}}></UserContext.Provider>
}

export const useUser = () => useContext(UserContext);