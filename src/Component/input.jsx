import React from 'react';

const InputComponent = React.forwardRef((props, ref,register) => {
    return (
        <div>
            {
                props.label && <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">{props.label}</label>
            }
            <input
                type={props.type}
                id={props.id}
                ref={ref}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                style={props.style}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                {...register}
                aria-invalid={props.error ? 'true' : false}
            />
            {
                props.error && <span className="text-red-500">{props.error.message}</span>
            }
        </div>
    );
});

export default InputComponent;
