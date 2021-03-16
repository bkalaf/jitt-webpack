import createWith from '../../core/array/createWith';
import getRange from '../../core/array/getRange';
import getCharCode from '../../core/text/getCharCode';

export default function createRandomString(len: number) {
    const lowerASCII = getRange(getCharCode('a'), getCharCode('z'));
    const upperASCII = getRange(getCharCode('A'), getCharCode('Z'));
    const digit = getRange(getCharCode('0'), getCharCode('9'));

    const randoms = createWith(() => Math.random(), len);

    const opts = [...lowerASCII, ...upperASCII, ...digit];
    const qty = opts.length;

    return randoms
        .map((x) => Math.floor(qty * x))
        .map((ix) => String.fromCharCode(opts[ix]))
        .join('');
}
