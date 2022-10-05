import React from 'react';
import cl from "./MySelect.module.css"
const MySelect = ({defaultValue, options}) => {
    return(
        <div>
            <select className={cl.sort} >
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