import React, {useState, ChangeEvent} from 'react';
import {useField} from 'formik';

interface InputProps {
    className?: string;
    labelText?: string;
    type?: string;
    placeholder?: string;
    name: string;
    icon?: string;
    margin?: string;
    formik?: boolean;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
                                         className = '',
                                         labelText,
                                         type = 'text',
                                         placeholder,
                                         name,
                                         icon,
                                         margin,
                                         formik = true, // By default, assume Formik is being used
                                         value,
                                         onChange,
                                     }) => {
    const [focus, setFocus] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta] = formik ? useField({name, type}) : [{value}, {}];

    return (
        <div className={margin}>
            {labelText && (
                <label htmlFor={name} className="block text-gray-700 text-lg font-bold mb-2">
                    {labelText}
                </label>
            )}
            <div className="relative flex w-full">
                {icon && (
                    <i
                        className={`${icon} absolute left-1.5 top-1/2 -translate-y-1/2 transition-colors duration-300 text-gray-400 ${focus ? 'text-primary' : 'text-gray-400'}`}
                    />
                )}
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    className={`w-full px-2 py-2 border-b-2 border-gray-300 focus:border-red-500 outline-none transition-colors duration-300 ease-in-out ${className}`}
                    aria-label={placeholder || labelText}
                    autoComplete="off"
                    style={{paddingLeft: icon ? '30px' : undefined}}
                    {...(formik ? {...field, onBlur: () => setFocus(false)} : {value, onChange, onBlur:()=> setFocus(false)})}
                />
            </div>
            {meta?.error && <span className="block text-red-500 text-sm">{meta.error}</span>}
        </div>
    );
};

export default Input;