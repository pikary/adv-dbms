import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

    password: Yup.string()
        .required('Password is required'),
});

const initialValues ={
    email: '',
    password: '',
}


export {loginValidationSchema,initialValues}