import React from 'react';
import Button from '@atoms/Button';

export interface IBurgerProps extends IProps {
    dataTarget: string;
    isOpen: boolean;
    setMenuOpen: React.Dispatch<boolean>;
}
export default function Burger(props: IBurgerProps) {
    const { dataTarget, isOpen, setMenuOpen, id, ...spread } = pipe(props)(
        put('navbar-burger')
    );
    const onClick = (ev: React.MouseEvent) => {
        const ele = document.getElementById(dataTarget);
        const burger = document.getElementsByClassName('navbar-burger')[0];

        ele?.classList.toggle('is-active');
        burger?.classList.toggle('is-active');
        burger.setAttribute('aria-expanded', (!isOpen).toString());
        setMenuOpen(!isOpen);
    };
    return (
        <Button
            tag="a"
            type="button"
            aria-label="menu"
            aria-expanded={isOpen ? 'true' : 'false'}
            data-target={dataTarget}
            onClick={onClick}
            {...spread}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </Button>
    );
}
