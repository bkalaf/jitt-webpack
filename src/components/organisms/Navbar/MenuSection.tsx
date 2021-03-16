import React from 'react';
import { IMenuRoute } from '@molecules/MenuBar/IMenuRoute';
import { IMenuSection } from '@molecules/MenuBar/IMenuSection';
import Navbar from '.';

export default function MenuSection(props: IMenuSection & IProps) {
    const result = props.routes.map((route: IMenuRoute) => (
        <Navbar.Dropdown items={props.routes}>{route.name}</Navbar.Dropdown>
    ));
    return (
        <Navbar.Item hasDropdown>
            <Navbar.Link label={props.name}></Navbar.Link>
            {result}
        </Navbar.Item>
    );
}
