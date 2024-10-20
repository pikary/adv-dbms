import {FC} from 'react'
import './styles.css'


const Footer:FC  = () =>{
    return(
        <footer className={'footer bg-backround'}>
            <div className={'footer-content'}>
                <ul>
                    <li>Exclusive</li>
                    <li>Subscribe</li>
                    <li>Get 10% off your first order</li>
                    <li>
                        <input/>
                    </li>
                </ul>
                <ul>
                    <li>Support</li>
                    <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                    <li>exclusive@gmail.com</li>
                    <li>+88015-88888-9999</li>
                </ul>
                <ul>
                    <li>Account</li>
                    <li>My Account.</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
                <ul>
                    <li>Quick Link</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
                <div>
                    {/*social media icons*/}
                </div>
            </div>
        </footer>
    )
}

export default Footer