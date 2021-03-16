import React from 'react';

export interface IItemProps extends IProps {
    // tag?: anchor | div;
    href?: string;
    hasDropdown?: boolean;
}

export default function Item(props: IItemProps) {
    const tag = props.hasDropdown ?? false ? 'div' : 'a';
    const { children, ...spread } = pipe(props)(
        put('navbar-item'),
        flag('hasDropdown', 'has-dropdown')
    );

    const result = React.createElement(tag, spread, children);
    return result;
}
