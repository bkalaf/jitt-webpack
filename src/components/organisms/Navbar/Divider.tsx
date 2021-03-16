import React from 'react';

export default function Divider(props: IProps) {
    const { ...spread } = pipe(props)(put('navbar-divider'));
    return <hr {...spread} />;
}
