import React from 'react';

export default function Start(props: IProps) {
    const { children, ...spread } = pipe(props)(put('navbar-start'));
    return <div {...spread}></div>;
}
