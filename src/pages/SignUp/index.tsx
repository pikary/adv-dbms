import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { registrationValidationSchema, initialValues, regions } from "./helpers/validation.ts";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Link } from "react-router-dom";
import DataSelector from "../../components/Selector";
import { useAppDispatch } from "../../store/hooks.ts";
import { registerAsync, googleAsync } from "../../store/entities/User/api.ts";
import { RegistrationRequestBody } from "../../store/entities/User/types.ts";
import './styles.css'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const SignUp: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSubmit = async(values:RegistrationRequestBody) =>{
        try{
            await dispatch(registerAsync(values)).unwrap()
            //onSuccess
            navigate('/main')
        }catch(e){
            //onerror
            // TODO: Error message show in bottom right corner
        }
    }
    
    const googleLoginCallback = async(response:any) =>{
        try{
            await dispatch(googleAsync({token: response.credential})).unwrap()
            navigate('/main')
        }catch(e){

        }
    }

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: (a)=>{googleLoginCallback(a)},
            ux_mode: 'popup'
        });

        const wrapper: HTMLDivElement = document.createElement('div')
        document.body.appendChild(wrapper);
        window.google.accounts.id.renderButton(wrapper,  { theme: 'outline', size: 'large' } )
        const wrapperBtn = wrapper.querySelector("div[role=button]")
        wrapper.style.display = 'none'
        //goggle button
     
        const googleBtn = document.getElementById('googleLogin')
        googleBtn?.addEventListener('click',()=>{
            console.log('clikc');
            (wrapperBtn as HTMLButtonElement).click()
        })
    }, []);
    return (
        <section className={'w-full flex mb-16 mt-16'}>
            <div className={'flex-1 img'}
            ></div>
            <div className={'flex-1'}>
                <div className="w-full max-w-md pt-24 pl-24">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Create an Account</h2>
                    <p className="text-gray-600 mb-2">Enter your details below</p>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validateOnBlur={true}
                        validateOnChange={false}
                        validationSchema={registrationValidationSchema}>
                        <Form>
                            <Input name={'fullName'} icon={'fas fa-user'} placeholder={'Name'} margin={'mb-4'} />
                            <Input name={'email'} icon={'fas fa-envelope'} placeholder={'Email'} margin={'mb-4'} />
                            <div className={'mb-4'}>
                                <DataSelector name={'region'} data={regions as []}></DataSelector>
                            </div>
                            <Input name={'password'} placeholder={'Password'} margin={'mb-4'} icon="fas fa-lock" />
                            <Input name={'confirmPassword'} placeholder={'Confirm Password'} margin={'mb-4'} icon="fas fa-lock" />
                            <Button className={'mb-2 text-white'} type={'submit'} text={'Create Account'} />
                            <Button
                                id="googleLogin"
                                type="button"
                                text={"Sign Up with Google"}
                                icon="fa-brands fa-google"
                                className={'bg-transparent border-2 text-black mb-4'}
                            />
                                                        {/* <div id="googleLogin" className="mb-4"></div> */}

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