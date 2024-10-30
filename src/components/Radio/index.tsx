import { FC } from 'react';
import './styles.scss'

interface RadioProps {
    id: string;
    name: string;
    value: string;
    checked?: boolean;  // Optional, defaults to false if not provided
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    className?: string
}

const Radio: FC<RadioProps> = ({ id, name, value, checked = false, label, onChange,className }) => {
    return (
        <div className={`flex items-center mb-2 ${className}`}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden" // Hide the default radio button
            />
            <div className={`custom-radio ${checked ? 'checked' : ''}`} onClick={() => onChange({ target: { value, name } })}>
                <span className="radio-checkmark"></span>
            </div>
            <label htmlFor={id} className="cursor-pointer text-xl ml-2">
                {label}
            </label>
        </div>
    );
};

export default Radio;
