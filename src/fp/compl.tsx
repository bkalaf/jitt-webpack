export default function compl<T>(predicate: (x: T) => boolean) {
    return function (x: T) {
        return !predicate(x);
    };
}
