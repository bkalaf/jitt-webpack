import React from 'react';

export interface ILinkProps extends IProps {
    label: string;
}
export default function Link(props: ILinkProps) {
    const { label, ...spread } = pipe(props)(put('navbar-link'));
    return <a {...spread}>{label}</a>;
}
