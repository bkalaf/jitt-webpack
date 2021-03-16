import React from 'react';
import { IUserProfile } from './IUserProfile';

export type Timestamp = number;

export type IUserEmail = [email: string, isVerified: boolean];

export type IUserPhone = [tel: string, isVerified: boolean];
export type IUserSettings = {

}
export interface IMenuProps extends IProps {
    showOnTouch?: boolean;
    isOpen: boolean;
    isAnon: boolean;
    currentProfile: IUserProfile | null;
    userEmail: IUserEmail | [undefined, false];
}

export default function Menu(props: IMenuProps) {
    const { ...spread } = pipe(props)(
        put('navbar-menu'),
        flag('showOnTouch', 'is-mobile'),
        flag('isOpen', 'is-active')
    );
    return <div {...spread}></div>;
}
