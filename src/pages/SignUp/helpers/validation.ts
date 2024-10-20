import * as Yup from 'yup';

const registrationValidationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Full Name must be at least 2 characters')
        .max(50, 'Full Name cannot exceed 50 characters')
        .required('Full Name is required'),

    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password cannot exceed 20 characters')
        .required('Password is required'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),

    // role: Yup.string()
    //     .oneOf(['buyer', 'seller'], 'Role must be either buyer or seller')
    //     .required('Role is required'),

    region: Yup.string()
        .required('Region is required'),

    // Optional field for sellers
    // shopName: Yup.string().when('role', {
    //     is: 'seller',
    //     then: Yup.string().required('Shop Name is required for sellers'),
    //     otherwise: Yup.string().notRequired(),
    // }),
});

const initialValues ={
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
    region: '',
    shopName: ''
}
const regions = [
    { id: 1, name: "Akmola" },
    { id: 2, name: "Aktobe" },
    { id: 3, name: "Almaty" },
    { id: 4, name: "Almaty City" },
    { id: 5, name: "Atyrau" },
    { id: 6, name: "East Kazakhstan" },
    { id: 7, name: "Jambyl" },
    { id: 8, name: "Karaganda" },
    { id: 9, name: "Kostanay" },
    { id: 10, name: "Kyzylorda" },
    { id: 11, name: "Mangystau" },
    { id: 12, name: "North Kazakhstan" },
    { id: 13, name: "Pavlodar" },
    { id: 14, name: "Turkestan" },
    { id: 15, name: "West Kazakhstan" },
    { id: 16, name: "Zhetysu" },
    { id: 17, name: "Shymkent City" },
    { id: 18, name: "Astana City" },
];

export {registrationValidationSchema,initialValues,regions}