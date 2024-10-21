import {FC} from "react";
import {Formik, Form, Field} from "formik";
import {loginValidationSchema,initialValues} from "./helpers/validation"
import Input from "../../components/Input";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import { LoginRequestBody } from "../../store/entities/User/types";
import { loginAsync } from "../../store/entities/User/api";
import { useAppDispatch,useTypedSelector } from "../../store/hooks";


const SignIn: FC = () => {
    const dispatch = useAppDispatch()

    const onSubmit = async(values:LoginRequestBody) =>{
        try{
            const result = await dispatch(loginAsync(values)).unwrap()
            //onSuccess

        }catch(e){
            //onerror
        }
    }
    return (
        <section className={'w-full flex mb-20 mt-16'}>
            <div className={'flex-1 img'}
            ></div>
            <div className={'flex-1'}>
                <div className="w-full max-w-md pt-24 pl-24">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Log in to Exclusive</h2>
                    <p className="text-gray-600 mb-2">Enter your details below</p>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validateOnBlur={true}
                        validateOnChange={false}
                        validationSchema={loginValidationSchema}>
                        <Form>
                            <Input name={'email'} icon={'fas fa-envelope'} placeholder={'Email'} margin={'mb-4'}/>
                    
                            <Input name={'password'} placeholder={'Password'} margin={'mb-4'} icon="fas fa-lock"/>
                            <Button className={'mb-2 text-white'} type={'submit'} text={'Login'}/>
                            <Button type="button" text={"Sign Up with Google"} icon="fa-brands fa-google" className={'bg-transparent border-2 text-black mb-4'}/>
                            <Link className={'block underline'} to={'/'}>Forget password?</Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default SignIn