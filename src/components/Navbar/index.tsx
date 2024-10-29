import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Logo'
import Input from "../Input";
import './styles.css'


const Navbar: FC = () => {
    const [inputValue, setInputValue] = useState('');

    // Handle input change manually
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={'navbar-wrapper px-5'}>
            <nav className={'navbar flex py-4 justify-between items-center'}>
                <Logo></Logo>
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
                    <li>
                        <Link to="/signup" className="hover:text-primary transition duration-300">
                            Sign up
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-10">
                    <Input
                        className="border-gray-300"
                        name="username"
                        placeholder="What are you looking for?"
                        icon="fas fa-search" // Assuming FontAwesome icons or similar
                        formik={false} // Disable Formik
                        value={inputValue} // Pass the value manually
                        onChange={handleInputChange} // Manually handle changes
                    />
                    <div className="flex gap-4">
                        <button
                            className="rounded-full w-5 h-5 cursor-pointer"
                        >
                            <i className="block fa-regular fa-heart text-xl text-black hover:text-primary transition-colors duration-150"></i>
                        </button>
                        <button
                            className="rounded-full w-5 h-5 cursor-pointer"
                        >
                            <i className="block fa fa-shopping-cart text-xl text-black hover:text-primary transition-colors duration-150"></i>
                        </button>
                        <button
                            className="rounded-full w-5 h-5 cursor-pointer"
                        >
                            <i className="block fa-regular fa-user text-xl text-black hover:text-primary transition-colors duration-150"></i>
                        </button>
                    </div>
                </div>

            </nav>
        </div>

    )
}

export default Navbar