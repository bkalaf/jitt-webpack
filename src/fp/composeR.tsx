export default function composeR<T, U, V>(f: (x: T) => U, g: (x: U) => V) {
    return function (item: T) {
        return g(f(item));
    };
}
