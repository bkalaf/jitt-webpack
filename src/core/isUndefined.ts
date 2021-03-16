import { compl } from '@fp/';

export default function isUndefined(x: unknown): x is undefined {
    return typeof x === 'undefined';
}
export const isNotUndefined = compl(isUndefined);