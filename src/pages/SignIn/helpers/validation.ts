import * as Yup from 'yup';
import { LoginRequestBody } from '../../../store/entities/User/types';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

    password: Yup.string()
        .required('Password is required'),
});

const initialValues:LoginRequestBody ={
    email: '',
    password: '',
}


export {loginValidationSchema,initialValues}