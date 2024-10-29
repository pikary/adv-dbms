import { FC, useState, useContext } from "react";
import { AuthContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Logo';
import Input from "../Input";
import './styles.css';

const Navbar: FC = () => {
    const authContext = useContext(AuthContext);  
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();  

    // Handle input change manually
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');  // Redirect to login
    };

    return (
        <div className="navbar-wrapper px-5">
            <nav className="navbar flex py-4 justify-between items-center">
                <Logo />
                <ul className="flex space-x-6 text-black text-lg">
                    <li>
                        <Link to="/" className="hover:text-primary transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-primary transition duration-300">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-primary transition duration-300">
                            About
                        </Link>
                    </li>
                    {authContext?.isAuthenticated ? (
                        <li>
                            <button onClick={handleLogout} className="hover:text-primary transition duration-300">
                                Logout
                            </button>
                        </li>
                    ) : (
                        <li>
                            <Link to="/signup" className="hover:text-primary transition duration-300">
                                Sign up
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="flex items-center gap-10">
                    <Input
                        className="border-gray-300"
                        name="username"
                        placeholder="What are you looking for?"
                        icon="fas fa-search"
                        formik={false}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <div className="flex gap-4">
                        <button className="rounded-full w-5 h-5 cursor-pointer">
                            <i className="block fa-regular fa-heart text-xl text-black hover:text-primary transition-colors duration-150"></i>
                        </button>
                        <button className="rounded-full w-5 h-5 cursor-pointer">
                            <i className="block fa fa-shopping-cart text-xl text-black hover:text-primary transition-colors duration-150"></i>
                        </button>
                        <button className="rounded-full w-5 h-5 cursor-pointer">
                            <i className="block fa-regular fa-user text-xl text-black hover:text-primary transition-colors duration-150"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
