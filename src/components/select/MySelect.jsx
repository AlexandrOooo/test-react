import React from 'react';
import cl from "./MySelect.module.css"
const MySelect = ({ defaultValue, options, value, onChange}) => {
    return(
        <div>
            <select 
                value={value}
                onChange={onChange}
                className={cl.sort} >
                <option value="default" disabled>{defaultValue}</option>
                {
                    options.map(option => 
                        <option 
                            className={cl.sort__option} 
                            key={option.value} 
                            value={option.value}>
                                {option.name}
                        </option>
                    )
                }
            </select>
        </div>
    );
};

export default MySelect;