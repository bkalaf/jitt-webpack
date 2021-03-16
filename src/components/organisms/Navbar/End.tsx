import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { MaterialColors } from '@enums/MaterialColors';
import Avatar from '@molecules/Avatar';
import IconSize from '@enums/bulma/icon/IconSize';

interface IEndProps extends IProps {
    isAnonymous?: boolean;
    emailAddress?: string;
    isVerified?: boolean;
    userIcon?: IconDefinition;
    loginModalID: string;
    registerModalID: string;
    iconColor?: MaterialColors;
    iconSize?: IconSize;
}

export default function End(props: IEndProps) {
    const {
        isAnonymous,
        emailAddress,
        iconColor,
        userIcon,
        iconSize,
        loginModalID,
        registerModalID,
        isVerified,
        ...spread
    } = pipe(props)(put('navbar-end'));

    return (
        <div {...spread}>
            <Avatar
                userIcon={userIcon ?? faUserCircle}
                iconSize={iconSize ?? 'medium'}
                emailAddress={emailAddress ?? 'unspecified'}
                isVerified={isVerified ?? false}
                color={iconColor ?? 'black'}></Avatar>
        </div>
    );
}
