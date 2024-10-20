import {FC} from "react";
import {Formik, Form, Field} from "formik";
import {registrationValidationSchema, initialValues, regions} from "./helpers/validation.ts";
import Input from "../../components/Input";
import Button from "../../components/Button";

import './styles.css'
import {Link} from "react-router-dom";
import DataSelector from "../../components/Selector";

const SignUp: FC = () => {


    return (
        <section className={'w-full flex mb-32 mt-16'}>
            <div className={'flex-1 img'}
            ></div>
            <div className={'flex-1'}>
                <div className="w-full max-w-md pt-24 pl-24">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Create an Account</h2>
                    <p className="text-gray-600 mb-2">Enter your details below</p>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={() => {

                        }}
                        validateOnBlur={true}
                        validateOnChange={false}
                        validationSchema={registrationValidationSchema}>
                        <Form>
                            <Input name={'fullName'} icon={'fas fa-user'} placeholder={'Name'} margin={'mb-4'}/>
                            <Input name={'email'} icon={'fas fa-envelope'} placeholder={'Email'} margin={'mb-4'}/>
                            <div className={'mb-4'}>
                                <DataSelector name={'region'} data={regions as []}></DataSelector>
                            </div>
                            <Input name={'password'} placeholder={'Password'} margin={'mb-4'} icon="fas fa-lock"/>
                            <Input name={'confirmPassword'} placeholder={'Confirm Password'} margin={'mb-4'} icon="fas fa-lock"/>
                            <Button className={'mb-2 text-white'} type={'submit'} text={'Create Account'}/>
                            <Button type="button" text={"Sign Up with Google"} icon="fa-brands fa-google" className={'bg-transparent border-2 text-black mb-4'}/>
                            <p className={'text-center'}>
                                Already have account? &nbsp;&nbsp;
                                <Link className={'inline underline'} to={'/'}>Log In</Link>
                            </p>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default SignUp