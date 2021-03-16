export default function composeK<T, U, V>(
    f: (x: React.FunctionComponent<T>) => React.FunctionComponent<U>,
    g: (x: React.FunctionComponent<U>) => React.FunctionComponent<V>) {
    return (item: React.FunctionComponent<T>) => {
        return g(f(item));
    };
}
