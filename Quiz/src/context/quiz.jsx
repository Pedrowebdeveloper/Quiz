import { createContext } from "react";

export const QuizContext = createContext()
    const value = { name:"Quiz" };

export const QuizProvider = ({ children }) => {
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}