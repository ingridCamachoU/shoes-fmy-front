import { createContext, useContext } from 'react';

const UserContex = createContext();

export default function UserContexProvider({ children }) {
    return <UserContex.Provider value={{}}>{children}</UserContex.Provider>;
}

export const useUsercontext = () => useContext(UserContex);
