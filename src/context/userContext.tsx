import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../store/entities/User/types";
import baseRequest from "../utils/baseApi";


interface AuthContextProps {
    isAuthenticated: boolean;
    user: User | null;
}
const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

// Create the Auth Context

// AuthProvider Component
const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    // Function to get user credentials with token
    const getUserCreds = async () => {
        const savedToken = localStorage.getItem("access_token");
        if (savedToken) {
            try {
                const result = await baseRequest<User>('GET', 'api/auth/getme');
                console.log(result);
                
                if (result?.statusCode === 200 && result.data) {
                    setUser(result.data);
                    setIsAuthenticated(true);  // User is authenticated
                } else if (result?.statusCode === 401) {
                    // Token expired or invalid, navigate to login
                    setIsAuthenticated(false);
                    navigate("/register");  // Navigate to login page
                } else {
                    setIsAuthenticated(false);  // Other errors
                }
            } catch (e) {
                setIsAuthenticated(false);  // User is unauthenticated
                navigate("/register");  // Navigate to login page on error
            }
        } else {
            setIsAuthenticated(false);  // No token found
            navigate("/register");  // Redirect to login if no token
        }
    };

    // Check for token on app load
    useEffect(() => {
        getUserCreds();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
};


export { AuthContext, AuthProvider }