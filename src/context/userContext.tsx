import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { User } from "../store/entities/User/types";
import baseRequest from "../utils/baseApi";


interface AuthContextProps {
    isAuthenticated: boolean;
    token: string | null;
    user: User | null;
}
const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

// Create the Auth Context

// AuthProvider Component
const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    // Function to get user credentials with token
    const getUserCreds = async () => {
        const savedToken = localStorage.getItem("token");


    };

    // Check for token on app load
    useEffect(() => {
        getUserCreds();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, user }}>
            {children}
        </AuthContext.Provider>
    );
};


export { AuthContext, AuthProvider }