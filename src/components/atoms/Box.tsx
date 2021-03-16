import React from 'react';
import ClassList from '../ClassList';

export default function Box(props: IProps) {
    const { className, ...spread } = props;
    const cn = ClassList(className, ClassList.of('box'));
    return <div className={cn} {...spread}></div>
}