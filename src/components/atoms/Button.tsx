import React from 'react';
import ClassList from '../ClassList';
import { ButtonSpecificColors } from '../enums/bulma/button/ButtonSpecificColors';
import { ButtonType } from '../enums/html/ButtonType';
import createRandomString from './createRandomString';
import { MaterialColors } from '../enums/MaterialColors';
import { OriginalColors } from '../enums/bulma/OriginalColors';
import { ShadesOfGray } from '../enums/bulma/ShadesOfGray';
import useIsHovered from '../hooks/useIsHovered';
import { RecordWithTtl } from 'dns';

export type ButtonColors =
    | ButtonSpecificColors
    | ShadesOfGray
    | OriginalColors
    | MaterialColors;

export type ButtonSizes = 'small' | 'medium' | 'large' | 'normal';

interface IButtonProps extends IProps {
    tag: 'a' | 'button' | 'input';
    type: ButtonType;
    color?: ButtonColors;
    size?: ButtonSizes;
    fullwidth?: boolean;
    outlined?: boolean;
    inverted?: boolean;
    rounded?: boolean;
    active?: boolean;
    loading?: boolean;
    staticlike?: boolean;
    disabled?: boolean;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button(props: IButtonProps) {
    const {
        id,
        className,
        children,
        tag,
        color,
        size,
        outlined,
        fullwidth,
        rounded,
        inverted,
        staticlike,
        loading,
        active,
        ...rest
    } = props;
    const $id = id ?? createRandomString(20);
    const [onMouseEnter, onMouseLeave] = useIsHovered($id);
    const cn = ClassList(
        className,
        ClassList.of('button'),
        ClassList.flag(staticlike, 'is-static'),
        ClassList.flag(loading, 'is-loading'),
        ClassList.flag(active, 'is-active'),
        ClassList.flag(rounded, 'is-rounded'),
        ClassList.flag(inverted, 'is-inverted'),
        ClassList.flag(outlined, 'is-outlined'),
        ClassList.flag(fullwidth, 'is-fullwidth'),
        ClassList.prefix(size, 'is'),
        ClassList.prefix(color, 'is'),
        ClassList.flag(tag === 'a' && props.disabled, 'is-disabled')
    );

    const role = tag === 'a' ? { role: 'button' } : { role: '' };
    function addClass(id: string, cn: string) {
        document.getElementById(id)?.classList.add(cn);
    }
    function dropClass(id: string, cn: string) {
        document.getElementById(id)?.classList.remove(cn);
    }
    const spread = {
        ...rest,
        ...role,
        ...{ className: cn, id: $id, onMouseEnter, onMouseLeave },
    };

    React.useEffect(() => {
        const element = document.getElementById($id);
        if (element) {
            element.addEventListener(
                'focus',
                function (this: HTMLElement, ev: FocusEvent) {
                    addClass(this.id, 'is-focused');
                }
            );
            element.addEventListener(
                'mouseout',
                function (this: HTMLElement, ev: MouseEvent) {
                    dropClass(this.id, 'is-focused');
                }
            );
        }
    }, []);

    return React.createElement(tag, spread, children);
}
