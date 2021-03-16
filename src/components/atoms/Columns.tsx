import React from 'react';
import { breakpoint, only_breakpoint, till_breakpoint } from '../bulma/enums/breakpoints';
import ClassList from '../ClassList';

export interface IColumnsProps extends IProps {
    fromSize?: breakpoint;
    untilSize?: till_breakpoint;
    onlySize?: only_breakpoint;
    multiline?: boolean;
    gapless?: boolean;
    centered?: 'horizontal' | 'vertical';
}

export default function Columns(props: IColumnsProps) {
    const { className, fromSize, onlySize, untilSize, multiline, gapless, centered, ...spread } = props;
    const cn = ClassList(className,
        ClassList.of('columns'), 
        ClassList.prefix(fromSize, 'is'),
        ClassList.suffix(onlySize, 'only'),
        ClassList.prefix(untilSize, 'until'),
        ClassList.flag(multiline, 'is-multiline'),
        ClassList.flag(gapless, 'is-gapless'),
        ClassList.flag(centered === 'horizontal', 'is-centered'),
        ClassList.flag(centered === 'vertical', 'is-vcentered'));
    return <div className={cn} {...spread}></div>
}