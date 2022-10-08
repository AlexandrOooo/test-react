import React from 'react';
import cl from './Input.module.css';
const Input = (props) => {
    return(
        <div>
            <input className={cl.myInput} type="text" placeholder='Введіть запит' {...props} />
        </div>
    );
};

export default Input;