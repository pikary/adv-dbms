import React, {ReactNode} from 'react';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    text?: string;
    className?: string;
    onClick?: () => void;
    shortenText?: string;
}


function Button(props: ButtonProps) {
    const {
        onClick,
        className,
        type,
        disabled,
        text,
        icon,
        shortenText,
    } = props;

    return (
        <button
            id={props.id}
            disabled={disabled || false}
            onClick={onClick}
            className={'w-full bg-primary text-base cursor-pointer flex gap-4 justify-center items-center px-3 py-4 font-semibold rounded-lg ' + className}
            type={type}
        >
            {icon &&
                <i className={icon}></i>
            }
            <p>{text}</p>
        </button>
    );
}


export default Button;