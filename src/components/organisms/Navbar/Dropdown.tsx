import React from 'react';
import { IMenuRoute } from '@molecules/MenuBar/IMenuRoute';

export interface IDropdownProps extends IProps {
    items: IMenuRoute[];
}

export default function Dropdown(props: IDropdownProps) {
    const { ...spread } = pipe(props)(put('navbar-dropdown'));
    return <div {...spread}>
    </div>;
}

export function $NavbarButtonGroup() {

}
