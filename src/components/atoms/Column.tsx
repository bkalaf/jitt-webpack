import React from 'react';
import { columnSize } from '../bulma/columnSize';
import { breakpoint } from '../bulma/enums/breakpoints';
import ClassList from '../ClassList';
import { isNotUndefined } from '../../core/isUndefined';

type Full = [1, 1];
type Halves = [1, 2];
type Thirds = [1, 3] | [2, 3];
type Fourths = [1, 4] | [3, 4];
type Fifths = [1, 5] | [2, 5] | [3, 5] | [4, 5];
type Fraction = Full | Halves | Thirds | Fourths | Fifths | [];

interface IColumnProps extends IProps {
    span?: columnSize;
    ofFraction?: Fraction;
    offsetSpan?: columnSize;
    offsetFraction?: Fraction;
    narrow?: boolean;
    narrowAt?: breakpoint;
}



const numerator = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
};
const denominator = {
    1: 'full',
    2: 'half',
    3: 'third',
    4: 'quarter',
    5: 'fifth',
};

function prefixedFraction(prefix: string) {
    return function (...[num, denom]: Fraction) {
        return num && denom
            ? [
                  prefix,
                  [
                      num === 1 ? undefined : numerator[num],
                      `${denominator[denom]}${num === 1 ? '' : 's'}`,
                  ]
                      .filter(isNotUndefined)
                      .join('-'),
              ]
            : [];
    };
}
export default function Column(props: IColumnProps) {
    const { className, span, ofFraction, offsetSpan, offsetFraction, narrow, narrowAt, ...spread } = props;
    const cn = ClassList(
        className,
        ClassList.of('column'),
        ClassList.prefix(span?.toString(), 'is'),
        prefixedFraction('is')(...(ofFraction ?? [])),
        ClassList.prefix(offsetSpan?.toString(), 'is-offset'),
        prefixedFraction('is-offset')(...(offsetFraction ?? [])),
        ClassList.flag(narrow, 'is-narrow'),
        ClassList.prefix(narrowAt, 'is-narrow')
    );
    return <div className={cn} {...spread}></div>;
}