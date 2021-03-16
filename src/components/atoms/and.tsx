function and<T>(p1: Predicate<T>, p2: Predicate<T>): Predicate<T> {
    return function (item: T) {
        return p1(item) ? p2(item) : false;
    };
}
