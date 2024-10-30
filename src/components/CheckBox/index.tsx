import React, { useEffect } from 'react';
import { useField } from "formik";
import './styles.scss';

interface CheckboxProps {
    name: string;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
    const [field, meta] = useField({ name, type: 'checkbox' })
    useEffect(() => {
        console.log(field.checked)
    }, [field.checked]);
    return (
        <>
            <label className={'checkbox__container cursor-pointer block text-xl '}>
                <input
                    type="checkbox"
                    className={'checkbox__input mr-4 ' + (field.checked && 'checked')}
                    {...field}
                />
                <span className={`checkmark ${meta.error && 'checkmark-error'}`} style={{ background: field.checked ? '#DB4444' : '#eee' }}></span>
                <span className='transform -translate-y-1/2 '>
                    {label}
                </span>
            </label>

        </>

    );
};

export default Checkbox;
