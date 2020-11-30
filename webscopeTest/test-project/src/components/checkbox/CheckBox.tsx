import React from 'react';

import { ICheckBoxProps } from './types';

export const CheckBox: React.FC<ICheckBoxProps> = ({className})  => (
    <label className={className}>
        <input type="checkbox"/>
    </label>
)
