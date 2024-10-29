import {FC, useEffect} from "react";
import {Formik, Form} from "formik";
import { useNavigate } from "react-router-dom";
import {loginValidationSchema,initialValues} from "./helpers/validation"
import Input from "../../components/Input";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import { LoginRequestBody } from "../../store/entities/User/types";
import { loginAsync ,googleAsync} from "../../store/entities/User/api";
import { useAppDispatch,useTypedSelector } from "../../store/hooks";


const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

const SignIn: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSubmit = async(values:LoginRequestBody) =>{   
        try{
            await dispatch(loginAsync(values)).unwrap()
            //onSuccess
            navigate('/')
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
     
        const googleBtn = document.getElementById('googleLogin1')
        googleBtn?.addEventListener('click',()=>{
            console.log('clikc');
            (wrapperBtn as HTMLButtonElement).click()
        })
    }, []);
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
                            <Button id='googleLogin1' type="button" text={"Sign Up with Google"} icon="fa-brands fa-google" className={'bg-transparent border-2 text-black mb-4'}/>
                            <Link className={'block underline'} to={'/'}>Forget password?</Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default SignIn