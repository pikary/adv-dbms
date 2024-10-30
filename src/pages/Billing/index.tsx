import { FC, useContext, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Input from "../../components/Input";
import Checkbox from "../../components/CheckBox";
import { initialValues, validationSchema } from "./helpers";
import { CartContext } from "../../context/cartContext";
import Radio from "../../components/Radio";
import bkash from '../../assets/images/Bkash.png'
import visa from '../../assets/images/Visa.png'
import mastercard from '../../assets/images/Mastercard.png'
import nagad from '../../assets/images/Nagad.png'
import Button from "../../components/Button";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

type PaymentType = 'bank' | 'not_bank'

// CardElement styling options
const cardElementOptions = {
    style: {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSize: '18px', // Increased font size for better visibility
            lineHeight: '24px',
            padding: '10px', // Add padding for the input
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
        },
    },
};




const Billing: FC = () => {
    const navigate = useNavigate()
    const { products } = useContext(CartContext)
    const [selectedValue, setSelectedValue] = useState<PaymentType>('bank');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (type: PaymentType) => {
        setSelectedValue(type);
    };
    const calculateSubtotal = () => {
        return products.reduce((acc, product) => acc + product.price, 0);
    };

    const subtotal = calculateSubtotal();
    const total = subtotal;



    const handleSubmit = async (values: any) => {
        if (!stripe || !elements) {
            return; // Stripe.js has not yet loaded
        }

        try {
            // Create a Payment Intent in the backend
            const response = await fetch('http://localhost:5000/api/orders/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: total * 100, 
                    currency: 'usd', // specify your currency
                }),
            });

            const { clientSecret } = await response.json(); // Get clientSecret from response

            const cardElement = elements.getElement(CardElement);
            const { error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: values.firstName,
                    },
                },
            });

            if (paymentError) {
                setError(paymentError.message || '');
                setSuccess(null);
            } else {
                // Create order in the backend
                await fetch('http://localhost:5000/api/orders/create-order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        order: {
                            firstName: values.firstName,
                            address: values.address,
                            city: values.city,
                            number: values.number,
                            email: values.email,
                            products,
                        },
                    }),
                });
                alert('Payment successful! Order created.');
                navigate('/')
                setError(null);
            }
        } catch (err) {
            alert(err)
            console.error(err);
        }
    };
    return (
        <section style={{ paddingTop: 60, paddingBottom: 60 }}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validateOnBlur={true}
                validateOnChange={false}
                validationSchema={validationSchema}>
                <Form className="flex gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold text-primary pb-3">Billing Details</h2>
                        <Input className="h-10 text-lg" name={'firstName'} icon={'fas fa-user'} placeholder={'First Name'} margin={'mb-6'} />
                        <Input className="h-10 text-lg" name={'address'} icon={'fas fa-home'} placeholder={'Street Address'} margin={'mb-6'} />
                        <Input className="h-10 text-lg" name={'apartment'} icon={'fas fa-building'} placeholder={'Apartment, floor, etc. (optional)'} margin={'mb-6'} />
                        <Input className="h-10 text-lg" name={'city'} icon={'fas fa-city'} placeholder={'Town/City*'} margin={'mb-6'} />
                        <Input className="h-10 text-lg" name={'number'} icon={'fas fa-phone'} placeholder={'Phone Number*'} margin={'mb-6'} />
                        <Input className="h-10 text-lg" name={'email'} icon={'fas fa-envelope'} placeholder={'Email Address*'} margin={'mb-6'} />
                        <Checkbox name="isSave" label="Save this information for faster check-out next time" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold text-primary pb-3">Your Cart</h2>
                        {/* Items in Cart */}
                        <div>
                            {products.map(pr => (
                                <div className="flex justify-between items-center border-b pb-2 mb-2">
                                    <div className="flex items-center">
                                        <img src={pr.images[0]} alt="LCD Monitor" className="w-16 h-16 mr-4" />
                                        <span className="text-lg">{pr.name}</span>
                                    </div>
                                    <span className="text-lg">{pr.price}</span>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="flex justify-between text-lg   mb-2 border-b-2 py-2">
                            <span className="font-semibold">Subtotal:</span>
                            <span>{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-lg   mb-2 border-b-2 py-2">
                            <span className="font-semibold">Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between text-lg   font-bold mb-4">
                            <span className="font-semibold">Total:</span>
                            <span>{total}</span>
                        </div>

                        <div className="flex justify-between">
                            <Radio
                                id="huey"
                                name="drone"
                                value="huey"
                                checked={selectedValue === 'bank'}
                                label="Pay online"
                                onChange={() => {
                                    handleChange('bank')
                                }}
                            />
                            <div className="flex gap-1">
                                <img className="" width={50} height={28} src={visa}></img>
                                <img className="" width={50} height={28} src={mastercard}></img>
                                <img className="" width={50} height={28} src={nagad}></img>
                                <img className="" width={50} height={28} src={bkash}></img>
                            </div>
                        </div>
                        {selectedValue === 'bank' &&
                            <div className="my-4">
                                <CardElement options={cardElementOptions} />
                            </div>
                        }


                        <Radio
                            id="huey"
                            name="drone"
                            value="bank"
                            className="mt-3"
                            checked={selectedValue === 'not_bank'}
                            label="Cash on delivery"
                            onChange={() => {
                                handleChange('not_bank')
                            }}
                        />

                        <Button text="Place order" className="mt-4 text-xl text-white bg-primary hover:bg-opacity-75 transition-colors duration-200 ease-in-out"></Button>
                    </div>
                </Form>
            </Formik>
        </section>
    );
}

export default Billing;
