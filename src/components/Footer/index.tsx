import { FC } from 'react';
import './styles.css';

const Footer: FC = () => {
    return (
        <footer className={'footer bg-backround px-5 text-white'}>
            <div className="footer-content grid grid-cols-4 gap-8 pt-20 pb-28 relative select-none">
                <ul>
                    <li className="font-bold text-xl mb-4">Exclusive</li>
                    <li className={'my-2 block'}>Subscribe</li>
                    <li className={'my-2 block'}>Get 10% off your first order</li>
                    <li className={'my-2 block'}>
                        <input className="p-2 mt-2 bg-transparent border-2 border-white " placeholder="Enter your email" />
                    </li>
                </ul>

                <ul>
                    <li className="font-bold text-xl mb-4">Support</li>
                    <li className={'my-2 block'}>111 Bijoy Sarani, Dhaka, Bangladesh.</li>
                    <li className={'my-2 block'}>
                        <a href="mailto:exclusive@gmail.com" className="hover:underline">exclusive@gmail.com</a>
                    </li>
                    <li className={'my-2 block'}>
                        <a href="tel:+88015888889999" className="hover:underline">+88015-88888-9999</a>
                    </li>
                </ul>

                <ul>
                    <li className="font-bold text-xl mb-4">Account</li>
                    <li className={'my-2 block'}>
                        <a href="/account" className="hover:underline">My Account</a>
                    </li>
                    <li className={'my-2 block'}>
                        <a href="/login" className="hover:underline">Login / Register</a>
                    </li>
                    <li className={'my-2 block'}>
                        <a href="/cart" className="hover:underline">Cart</a>
                    </li>
                    <li className={'my-2 block'}>
                        <a href="/wishlist" className="hover:underline">Wishlist</a>
                    </li>
                    <li className={'my-2 block'}>
                        <a href="/shop" className="hover:underline">Shop</a>
                    </li>
                </ul>

                <ul>
                    <li className="font-bold text-xl mb-4">Quick Links</li>
                    <li className={'my-2 block'}>
                        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className={'my-2 block'}>
                        <a href="/terms" className="hover:underline">Terms Of Use</a>
                    </li>
                    <li className={'my-2 block'}>
                        <a href="/faq" className="hover:underline">FAQ</a>
                    </li>
                    <li className={'my-2 block'}>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </li>
                </ul>


                <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500">
                    &copy;&nbsp;&nbsp;Copyright Rimel 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
