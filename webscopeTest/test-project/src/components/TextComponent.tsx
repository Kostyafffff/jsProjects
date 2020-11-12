import React from 'react';
import { ITextComponentProps } from './types';

export const TextComponent: React.FC<ITextComponentProps> = ({ text }): JSX.Element => {
    return (
        <div>
            {text}
        </div>
    );
};
