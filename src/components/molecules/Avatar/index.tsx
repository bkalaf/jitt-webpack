import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MaterialColors } from '@enums/MaterialColors';
import IconSize from '@enums/bulma/icon/IconSize';

export interface IAvatarProps extends IProps {
    userIcon: IconDefinition;
    iconSize: IconSize;
    emailAddress: string;
    color: MaterialColors;
    isVerified: boolean;
}

export default function Avatar(props: IAvatarProps) {
    const { userIcon, emailAddress, isVerified, ...spread } = pipe(props)(
        put('control'),
        // TODO find a better component
        prefix('color', 'has-text'),
        prefix('iconSize', 'is')
    );

    return (
        <div {...spread}>
            <input
                className="input is-static"
                type="text"
                readOnly
                value={emailAddress}></input>
            <FontAwesomeIcon icon={userIcon} />
        </div>
    );
}
