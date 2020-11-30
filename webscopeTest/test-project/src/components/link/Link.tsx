import React from 'react';

import { ILinkProps } from './types';

export const Link: React.FC<ILinkProps> = ({
    linkText,
    url,
    className
}) => {
    return (
        <a className={className} href={url}>{linkText}</a>
    );
}
