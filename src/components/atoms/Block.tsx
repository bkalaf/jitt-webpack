import React from 'react';
import ClassList from '../ClassList';

export default function Block(props: IProps) {
    const { className, ...spread } = props;
    const cn = ClassList(className, ClassList.of('block'));
    return <div className={cn} {...spread}></div>
}