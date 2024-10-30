import * as Yup from 'yup'

const initialValues = {
    firstName: '',
    address: '',
    apartment: '',
    city: '',
    number: '',
    email: '',
    isSave: false // Initialize the checkbox
};

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required'),
    address: Yup.string()
        .required('Street Address is required'),
    apartment: Yup.string(),
    city: Yup.string()
        .required('Town/City is required'),
    number: Yup.string()
        .required('Phone Number is required')
        .matches(/^[0-9]+$/, 'Phone Number must be digits only'), // Regex to ensure only numbers
    email: Yup.string()
        .email('Invalid email format')
        .required('Email Address is required')
});


export {validationSchema,initialValues}