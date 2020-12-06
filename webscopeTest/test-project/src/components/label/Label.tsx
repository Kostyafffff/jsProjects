import React from 'react';
import {ILabelProps} from "./types";

export const Label: React.FC<ILabelProps> = ({
   className,
   text,
   type,
   value,
   placeholder,
   onChange
}): JSX.Element => (
 <label className={className}>
    {text}
    <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
 </label>
)
