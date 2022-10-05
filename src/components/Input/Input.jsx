import React from 'react';
import cl from './Input.module.css';
const Input = () => {
    return(
        <div>
            <input className={cl.myInput} type="text" placeholder='Введіть запит'/>
        </div>
    );
};

export default Input;