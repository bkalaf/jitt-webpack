export default function joinText(mid: string) {
    return function (left: string, right: string) {
        return [left, mid, right].join('');
    };
}
