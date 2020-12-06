import React from 'react';

import { ILinkProps } from './types';

export const Link: React.FC<ILinkProps> = ({
    linkText,
    url,
    className
}): JSX.Element => {
    return (
        <a className={className} href={url}>{linkText}</a>
    );
}
