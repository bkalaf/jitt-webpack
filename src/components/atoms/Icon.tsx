import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import isBoolean from '@core/isBoolean';
import isString from '@core/isString';
import joinText from '@core/text/joinText';

export interface IIconProps extends IProps {
    icon: IconDefinition | string;
    iconSize: Sizes;
    faSize?: 'lg' | '2x' | '3x' | 'sm';
    fixedWidth?: boolean;
    spin?: boolean;
    pulse?: boolean;
    inverse?: boolean;
    border?: boolean;
    stack?: boolean | '1x' | '2x';
}

const prependText = joinText('');

const a1 = (x: boolean | '1x' | '2x' | undefined) => isBoolean(x) ? (x ? 'fa-stack' : 
    undefined) : isString(x) ? prependText('fa-', x) : undefined;

const pipeline: WriterFunc<IIconProps>[] = [
    flag('spin', 'fa-spinner'),
    flag('pulse', 'fa-pulse'),
    flag('border', 'fa-border'),
    flag('inverse', 'fa-inverse'),
    apply('stack', a1),
    flag('fixedWidth', 'fa-fw'),
    prefix('faSize', 'fa'),
    put('fas'),
    doNotRemove(testIf('icon', isString, toString))
]

export default function Icon(props: IIconProps) {
    const { icon, ...spread } = pipe(props)(...pipeline);
    return React.createElement(isString(icon) ? 'i' : 'FontAwesomeIcon', spread);
}


