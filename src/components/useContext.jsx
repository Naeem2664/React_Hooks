import { createContext } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const userData = {
        id: 1,
        name: "Naeem",
        father_name: 'Rafique',
        class: 'SWEN-7B'
    };
    return (
        <>
            <AppContext.Provider value={userData}>{children}</AppContext.Provider>
        </>
    )
}

export { AppContext, AppProvider }